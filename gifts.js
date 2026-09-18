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
     image       -> caminho ou link da imagem. Pode ser:
                    - um arquivo dentro de /images/presentes/, ex:
                      "images/presentes/ostras.jpg"
                    - ou um link direto de uma imagem na internet, ex:
                      "https://exemplo.com/foto.jpg"
                    Deixe como "" (vazio) enquanto não tiver a imagem —
                    o card aparece sem foto até você preencher.

   Para REMOVER um presente, apague o bloco inteiro (do "{" ao "},").

   Todos os presentes usam a MESMA chave Pix (configurada em config.js),
   só o valor sugerido muda de um pro outro.
   ============================================================ */
const GIFTS = [
  {
    name: "Ostras (Hiroshima)",
    description: "Ajude a bancar uma degustação de ostras frescas em Hiroshima.",
    price: "R$ 150",
    amount: 150,
    image: "images/presentes/ostras-hiroshima.svg",
  },
  {
    name: "Arte em ouro (Kanazawa)",
    description: "Uma experiência com folha de ouro, tradição centenária de Kanazawa.",
    price: "R$ 200",
    amount: 200,
    image: "images/presentes/arte-ouro-kanazawa.svg",
  },
  {
    name: "Tour gastronômico em Dotonbori (Osaka)",
    description: "Um passeio de comidas pelas ruas mais animadas de Osaka.",
    price: "R$ 250",
    amount: 250,
    image: "images/presentes/dotonbori-tour.svg",
  },
  {
    name: "Ingressos mirante Shibuya Sky",
    description: "Vista de 360° de Tóquio lá do alto do Shibuya Sky.",
    price: "R$ 250",
    amount: 250,
    image: "images/presentes/shibuya-sky.svg",
  },
  {
    name: "Cerimônia do Chá",
    description: "Uma cerimônia do chá tradicional japonesa, completa.",
    price: "R$ 300",
    amount: 300,
    image: "images/presentes/cerimonia-cha.svg",
  },
  {
    name: "Museu teamLab Planets",
    description: "Instalações imersivas de arte digital, uma das experiências mais únicas do Japão.",
    price: "R$ 300",
    amount: 300,
    image: "images/presentes/teamlab-planets.svg",
  },
  {
    name: "Aluguel de kimonos em Quioto",
    description: "Um dia inteiro passeando de kimono pelas ruas históricas de Quioto.",
    price: "R$ 400",
    amount: 400,
    image: "images/presentes/kimono-kyoto.svg",
  },
  {
    name: "Almoço autêntico com Wagyu",
    description: "Um almoço especial com carne Wagyu de verdade.",
    price: "R$ 600",
    amount: 600,
    image: "images/presentes/wagyu-almoco.svg",
  },
  {
    name: "Tokyo Disneyland",
    description: "Um dia de ingresso no parque Tokyo Disneyland.",
    price: "R$ 700",
    amount: 700,
    image: "images/presentes/parque-tematico-1.svg",
  },
  {
    name: "Tokyo DisneySea",
    description: "Um dia de ingresso no parque Tokyo DisneySea.",
    price: "R$ 700",
    amount: 700,
    image: "images/presentes/parque-tematico-2.svg",
  },
  {
    name: "Universal Studios",
    description: "Um dia de ingresso no Universal Studios Japan.",
    price: "R$ 700",
    amount: 700,
    image: "images/presentes/parque-tematico-3.svg",
  },
];
