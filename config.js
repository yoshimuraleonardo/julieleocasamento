/* ============================================================
   CONFIGURAÇÕES DO SITE — edite os valores abaixo à vontade.
   Depois de editar, salve o arquivo e suba de novo pro GitHub
   (ou arraste o arquivo atualizado no GitHub, se preferir).
   ============================================================ */
const SITE_CONFIG = {
  // Data e hora do casamento (formato: 'AAAA-MM-DDTHH:MM:SS')
  weddingDateISO: "2026-12-05T19:00:00-03:00",

  // Data limite para confirmar presença
  rsvpDeadline: "01/10/2026",

  // Local
  venueName: "Restaurante D’autore",
  venueAddress: "R. dos Bandeirantes, 313 – Cambuí, Campinas – SP, 13024-010",
  // Link "Como chegar" (Google Maps). Pode usar o link de compartilhar do próprio Google Maps.
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=R.+dos+Bandeirantes,+313+-+Cambu%C3%AD,+Campinas+-+SP,+13024-010",
  // Endereço usado para o mapa incorporado (não precisa mexer)
  mapsEmbedQuery: "R. dos Bandeirantes, 313 - Cambuí, Campinas - SP, 13024-010",

  // ------------------------------------------------------------
  // CONFIRMAÇÃO DE PRESENÇA (RSVP)
  // ------------------------------------------------------------
  // 1. Crie um Google Forms com os campos: Nome completo, Vai comparecer?
  //    (Sim/Não), Quantidade de acompanhantes, Mensagem (opcional).
  // 2. Nas configurações do Forms (ícone de engrenagem > Respostas),
  //    ative "Receber notificações por e-mail de novas respostas".
  //    Isso manda um e-mail pra caixa de entrada de quem criou o
  //    formulário toda vez que alguém confirmar — inclusive o nome
  //    de quem confirmou. Crie o formulário logado como
  //    yoshimura.leonardo@gmail.com para os avisos caírem lá.
  // 3. Clique em Enviar > ícone "<>" (incorporar) e copie o link
  //    que aparece dentro de src="..." — cole abaixo.
  // ------------------------------------------------------------
  rsvpFormEmbedUrl: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2FqZp9kc7cPRPb4TGkBHybUT6fibtQG9d0OzIFg45Py_vSQ/viewform?embedded=true" width="640" height="969" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>,
  rsvpFormDirectUrl: https://docs.google.com/forms/d/e/1FAIpQLSc2FqZp9kc7cPRPb4TGkBHybUT6fibtQG9d0OzIFg45Py_vSQ/viewform?usp=publish-editor, // link "Enviar" simples, usado no botão alternativo

  // ------------------------------------------------------------
  // LISTA DE PRESENTES — dados do Pix
  // ------------------------------------------------------------
  // Sua chave Pix (CPF, e-mail, telefone ou chave aleatória)
  pixKey: "yoshimura.leonardo@gmail.com",
  // Nome do recebedor como aparece na conta (até 25 caracteres, sem acento é mais seguro)
  pixReceiverName: "Leonardo Yoshimura",
  // Cidade do recebedor (até 15 caracteres)
  pixReceiverCity: "CAMPINAS",
};
