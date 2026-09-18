/* ============================================================
   Não precisa editar este arquivo pra atualizar o conteúdo do site
   (isso é feito em config.js e gifts.js). Aqui só tem a lógica.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  startCountdown();
  setupNav();
  renderGifts();
  setupModal();
});

/* ---------------- Config → DOM ---------------- */
function applyConfig() {
  const c = SITE_CONFIG;

  setText("[data-rsvp-deadline]", c.rsvpDeadline);
  setText("[data-venue-name]", c.venueName);
  setText("[data-venue-address]", c.venueAddress);

  document.querySelectorAll("[data-maps-link]").forEach((el) => {
    el.href = c.mapsDirectionsUrl;
  });

  const mapFrame = document.querySelector("[data-map-embed]");
  if (mapFrame) {
    mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(
      c.mapsEmbedQuery
    )}&output=embed`;
  }

  const rsvpFrame = document.querySelector("[data-rsvp-frame]");
  const rsvpFallback = document.querySelector("[data-rsvp-fallback]");
  if (
    c.rsvpFormEmbedUrl &&
    !c.rsvpFormEmbedUrl.startsWith("COLE_AQUI")
  ) {
    if (rsvpFrame) rsvpFrame.src = c.rsvpFormEmbedUrl;
  } else if (rsvpFrame) {
    rsvpFrame.closest(".rsvp-frame-wrap").style.display = "none";
    if (rsvpFallback) {
      rsvpFallback.innerHTML =
        'O formulário de confirmação ainda não foi configurado. ' +
        '(Veja o README para criar o Google Forms e colar o link em config.js)';
    }
  }
  if (
    rsvpFallback &&
    c.rsvpFormDirectUrl &&
    !c.rsvpFormDirectUrl.startsWith("COLE_AQUI")
  ) {
    rsvpFallback.innerHTML = `Prefere abrir em outra aba? <a href="${c.rsvpFormDirectUrl}" target="_blank" rel="noopener">Confirme por aqui</a>.`;
  }
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => (el.textContent = value));
}

/* ---------------- Countdown ---------------- */
function startCountdown() {
  const target = new Date(SITE_CONFIG.weddingDateISO).getTime();
  const els = {
    days: document.querySelector("[data-cd-days]"),
    hours: document.querySelector("[data-cd-hours]"),
    minutes: document.querySelector("[data-cd-minutes]"),
  };
  if (!els.days) return;

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    els.days.textContent = days;
    els.hours.textContent = String(hours).padStart(2, "0");
    els.minutes.textContent = String(minutes).padStart(2, "0");
  }
  tick();
  setInterval(tick, 30000);
}

/* ---------------- Mobile nav ---------------- */
function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ---------------- Gift list ---------------- */
function renderGifts() {
  const grid = document.querySelector("[data-gift-grid]");
  if (!grid) return;

  if (!GIFTS || GIFTS.length === 0) {
    grid.innerHTML = `<div class="gifts-empty">Nenhum presente cadastrado ainda. Adicione itens em <code>gifts.js</code>.</div>`;
    return;
  }

  grid.innerHTML = GIFTS.map(
    (gift, i) => `
    <div class="gift-card">
      <div class="gift-img-wrap">${
        gift.image
          ? `<img src="${gift.image}" alt="${gift.name}" loading="lazy">`
          : `<div class="gift-img-placeholder">${gift.name.charAt(0)}</div>`
      }</div>
      <div class="gift-body">
        <div class="gift-name">${gift.name}</div>
        <div class="gift-desc">${gift.description || ""}</div>
        <div class="gift-price">${gift.price || ""}</div>
        <button class="gift-btn" data-gift-index="${i}">Presentear via Pix</button>
      </div>
    </div>`
  ).join("");

  grid.querySelectorAll("[data-gift-index]").forEach((btn) => {
    btn.addEventListener("click", () => openGiftModal(GIFTS[+btn.dataset.giftIndex]));
  });
}

/* ---------------- Modal + Pix QR ---------------- */
function setupModal() {
  const backdrop = document.querySelector("[data-modal-backdrop]");
  if (!backdrop) return;
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.querySelector("[data-modal-close]").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openGiftModal(gift) {
  const backdrop = document.querySelector("[data-modal-backdrop]");
  document.querySelector("[data-modal-title]").textContent = gift.name;
  document.querySelector("[data-modal-price]").textContent = gift.price || "";

  const canvas = document.getElementById("qrCanvas");
  const keyText = document.querySelector("[data-pix-payload]");
  const copyBtn = document.querySelector("[data-copy-btn]");
  const openLinkBtn = document.querySelector("[data-pix-open-link]");
  const helpText = document.querySelector("[data-pix-help]");

  if (gift.pixLink) {
    // Link de cobrança gerado pelo banco (já com o valor certo)
    QRCode.toCanvas(canvas, gift.pixLink, {
      width: 200,
      margin: 1,
      color: { dark: "#2A2A22", light: "#FBF8F1" },
    });
    keyText.textContent = gift.pixLink;
    keyText.dataset.full = gift.pixLink;
    copyBtn.textContent = "Copiar link";
    copyBtn.classList.remove("copied");
    openLinkBtn.href = gift.pixLink;
    openLinkBtn.style.display = "inline-block";
    helpText.textContent =
      "Toque em \"Abrir e pagar\" ou escaneie o QR code com a câmera do celular.";
  } else {
    // Fallback: Pix genérico gerado com a chave de config.js + o valor do presente
    const payload = buildPixPayload({
      key: SITE_CONFIG.pixKey,
      name: SITE_CONFIG.pixReceiverName,
      city: SITE_CONFIG.pixReceiverCity,
      amount: gift.amount || null,
      description: gift.name,
    });
    QRCode.toCanvas(canvas, payload, {
      width: 200,
      margin: 1,
      color: { dark: "#2A2A22", light: "#FBF8F1" },
    });
    keyText.textContent = payload;
    keyText.dataset.full = payload;
    copyBtn.textContent = "Copiar código Pix";
    copyBtn.classList.remove("copied");
    openLinkBtn.style.display = "none";
    helpText.textContent =
      "Abra o app do seu banco, escolha \"Pix Copia e Cola\" e cole o código, ou escaneie o QR code.";
  }

  backdrop.classList.add("open");
}

function closeModal() {
  document.querySelector("[data-modal-backdrop]").classList.remove("open");
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-copy-btn]")) {
    const text = document.querySelector("[data-pix-payload]").dataset.full;
    navigator.clipboard.writeText(text).then(() => {
      e.target.textContent = "Copiado!";
      e.target.classList.add("copied");
    });
  }
});

/* ---------------- Pix "Copia e Cola" (BR Code / EMV) ----------------
   Implementação do padrão público do Banco Central (BR Code) usado
   por todos os bancos para gerar o texto por trás do QR code Pix.
------------------------------------------------------------------- */
function emvField(id, value) {
  const len = String(value.length).padStart(2, "0");
  return `${id}${len}${value}`;
}

function crc16(payload) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function buildPixPayload({ key, name, city, amount, description, txid }) {
  const safeName = (name || "RECEBEDOR").substring(0, 25);
  const safeCity = (city || "CIDADE").substring(0, 15);
  const safeTxid = (txid || "***").substring(0, 25);

  let merchantAccount = emvField("00", "BR.GOV.BCB.PIX") + emvField("01", key);
  if (description) {
    merchantAccount += emvField("02", description.substring(0, 40));
  }

  let payload =
    emvField("00", "01") +
    emvField("26", merchantAccount) +
    emvField("52", "0000") +
    emvField("53", "986");

  if (amount) {
    payload += emvField("54", Number(amount).toFixed(2));
  }

  payload +=
    emvField("58", "BR") +
    emvField("59", safeName) +
    emvField("60", safeCity) +
    emvField("62", emvField("05", safeTxid));

  payload += "6304";
  payload += crc16(payload);
  return payload;
}
