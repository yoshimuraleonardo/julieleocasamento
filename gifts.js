/* ============================================================
   LISTA DE PRESENTES — edite aqui.

   Para ADICIONAR um presente nuovo, copie um bloco { ... } inteiro
   (do "{" ao "}," ), cole no fim da lista e mude os valores.

   Campos:
     name        -> nome do presente
     description -> descrição curta (1-2 frases)
     price       -> valor exibido no card, ex: "R$ 250"
     amount      -> valor numérico usado para gerar o QR code do Pix
                    (sem "R$", use ponto para centavos, ex: 250 ou 89.90)
     image       -> caminho da imagem. Coloque a foto do presente
                    dentro da pasta /images/presentes/ e escreva o
                    nome do arquivo aqui, ex: "images/presentes/liquidificador.jpg"

   Para REMOVER um presente, apague o bloco inteiro (do "{" ao "},").

   Todos os presentes usam a MESMA chave Pix (configurada em config.js),
   só o valor sugerido muda de um pro outro.
   ============================================================ */
const GIFTS = [
  {
    name: "Lua de mel",
    description: "Contribua com uma diária ou uma experiência especial na nossa viagem de núpcias.",
    price: "R$ 300",
    amount: 300,
    image: "images/presentes/lua-de-mel.svg",
  },
  {
    name: "Jantar a dois",
    description: "Um jantar especial pra comemorarmos o primeiro mês de casados.",
    price: "R$ 150",
    amount: 150,
    image: "images/presentes/jantar.svg",
  },
  {
    name: "Para a casa nova",
    description: "Ajude a equipar a cozinha ou a sala do nosso novo apê.",
    price: "R$ 200",
    amount: 200,
    image: "images/presentes/casa.svg",
  },
  {
    name: "Presente livre",
    description: "Prefere escolher o valor? Fique à vontade — todo carinho é bem-vindo.",
    price: "Valor livre",
    amount: null,
    image: "images/presentes/decoracao.svg",
  },
];
