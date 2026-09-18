# Site do casamento — J & L

Site pronto com: capa, contagem regressiva, informações do evento, mapa,
sugestões de hospedagem, confirmação de presença e lista de presentes
com Pix. Feito para hospedar de graça no **GitHub Pages**.

## 1. Subir no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público), ex: `casamento-jl`.
2. Suba todos os arquivos desta pasta para a raiz do repositório
   (`index.html`, `style.css`, `script.js`, `config.js`, `gifts.js` e a
   pasta `images/`).
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/ (root)`. Salve.
5. Em alguns minutos o site estará no ar em algo como
   `https://seu-usuario.github.io/casamento-jl/`.
   Se tiver domínio próprio, dá pra apontar em Settings → Pages → Custom domain.

## 2. Confirmação de presença com aviso por e-mail

O site usa um **Google Forms** incorporado — é de graça, salva tudo numa
planilha e já manda e-mail automático a cada resposta.

1. Entre em [forms.google.com](https://forms.google.com) **logado com a
   conta yoshimura.leonardo@gmail.com** (é pra essa conta que os avisos
   de nova resposta vão cair).
2. Crie um formulário com estes campos (sugestão):
   - **Nome completo** (resposta curta, obrigatório)
   - **Vai comparecer?** (múltipla escolha: Sim / Não)
   - **Quantidade de acompanhantes** (resposta curta ou lista suspensa)
   - **Mensagem para os noivos** (parágrafo, opcional)
3. Clique no ícone de **engrenagem** (Configurações) → aba **Respostas** →
   ative **"Receber notificações por e-mail de novas respostas"**.
   Pronto — a partir daqui, toda confirmação cai automaticamente na caixa
   de entrada, com o nome de quem respondeu.
4. As respostas também ficam organizadas numa planilha: no formulário,
   clique no ícone verde do Google Sheets (aba **Respostas**) para
   criar/abrir a planilha.
5. Clique em **Enviar** (canto superior direito):
   - Copie o **link normal** (ícone de link 🔗) e cole em `config.js`,
     no campo `rsvpFormDirectUrl`.
   - Clique no ícone **`< >`** (incorporar), copie o endereço que aparece
     dentro de `src="..."` e cole em `config.js`, no campo
     `rsvpFormEmbedUrl`.
6. Salve `config.js` e suba de novo pro GitHub.

## 3. Editar a lista de presentes

Abra o arquivo `gifts.js`. Cada presente é um bloco assim:

```js
{
  name: "Lua de mel",
  description: "Contribua com uma diária...",
  price: "R$ 300",       // texto mostrado no card
  amount: 300,            // valor usado pra gerar o Pix (número)
  image: "images/presentes/lua-de-mel.svg",
},
```

- Para **adicionar** um presente, copie um bloco inteiro, cole no final
  da lista e mude os valores.
- Para **remover**, apague o bloco inteiro.
- Para usar uma **foto real** em vez do ícone, salve a imagem dentro de
  `images/presentes/` (formato .jpg ou .png) e escreva o nome do arquivo
  no campo `image`.
- O QR code do Pix é gerado automaticamente pelo próprio site — não
  precisa printar QR nenhum. Todos os presentes usam a mesma chave Pix,
  configurada em `config.js` (`pixKey`, `pixReceiverName`,
  `pixReceiverCity`); só o valor de cada presente muda.

## 4. Outras configurações (`config.js`)

Nesse arquivo dá pra mudar, sem mexer no resto do código:
- Data e hora do casamento (`weddingDateISO`) — a contagem regressiva
  se ajusta sozinha.
- Data limite de confirmação (`rsvpDeadline`).
- Nome e endereço do local (`venueName`, `venueAddress`).
- Chave Pix e dados do recebedor.

## 5. Sobre o Pix

O código do QR (aquele texto longo "Pix Copia e Cola") é gerado no
próprio navegador do convidado, seguindo o formato público do Banco
Central (BR Code) — não guarda nem envia nada pra nenhum servidor.
Antes de divulgar o site, faça um teste: abra um presente, escaneie o
QR com o app do seu banco e confira se o valor e o nome aparecem
certinho antes de confirmar o pagamento de teste.

## Estrutura dos arquivos

```
index.html      → estrutura do site (não precisa editar)
style.css       → cores e visual (não precisa editar)
script.js       → funcionamento do site (não precisa editar)
config.js       → EDITE AQUI: data, endereço, Pix, link do formulário
gifts.js        → EDITE AQUI: lista de presentes
images/         → fotos do casal e dos presentes
```
