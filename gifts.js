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
                    Só é usado se "pixLink" (abaixo) estiver vazio.
     pixLink     -> (opcional) link de cobrança gerado pelo seu banco
                    pra esse valor específico, ex. no Nubank: abra o
                    app → Pix → Cobrar → digite o valor → gere o link
                    e cole aqui. Se preenchido, o card usa esse link
                    (mais confiável, já com o valor certo). Se deixar
                    "" (vazio), o site gera um Pix genérico com a sua
                    chave (config.js) + o valor de "amount" acima.
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
    name: "Snorkel em Taipu de Fora",
    description: "Mergulho em Maraú - BA",
    price: "R$ 150",
    amount: 150,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad4fed-b3f6-4043-9377-03c16921b72a,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq.jpg",
  },
  {
    name: "Drinks na Ponta do Mutá",
    description: "Uma tarde de drinks no melhor por do sol de Maraú",
    price: "R$ 200",
    amount: 200,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad503f-a5a9-4cba-bbbd-c41cb6051d37,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (7).jpg",
  },
  {
    name: "Almoço com Moqueca Baiana",
    description: "Um típico almoço Baiano",
    price: "R$ 250",
    amount: 250,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad5068-a00e-44c5-a467-6672fb738e3d,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (6).jpg",
  },
   {
    name: "Passeio de Jardineira pelas praias",
    description: "Passeio de barco pelas praias da Região",
    price: "R$ 275",
    amount: 275,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad50c2-9579-42f3-b74f-67918229419a,
    image: "images/watermarked_img_7428575731182869263.jpg",
  },
   {
    name: "Massagem relaxante para o casal",
    description: "Massagem relaxante no Spa do hotel Dreamland",
    price: "R$ 350",
    amount: 350,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad512e-77f3-4551-b7e3-f7f8157d3e8d,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (4).jpg",
  },
  {
    name: "Aluguel de Quadriciclo",
    description: "Aluguel para passeio de quadriciclo",
    price: "R$ 400",
    amount: 400,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad50e7-c979-4fe4-b379-da266c3fe7be,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (5).jpg",
  },
  {
    name: "Passeio à Cachoeira de Tremembé",
    description: "Passeio com ingresso para as cachoeiras de Tremembé",
    price: "R$ 450",
    amount: 450,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad5157-4dd7-43bb-8193-4db330aa94e5,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (3).jpg",
  },
  {
    name: "Jantar romântico em Barra Grande",
    description: "Um jantar romântico completo para celebrarmos em Barra Grande",
    price: "R$ 500",
    amount: 500,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad5179-1aa3-422d-94fd-1015834f4c71,
    image: "images/535d8ab5-39f6-48d1-9913-259a8e04d559.jpg",
  },
  {
    name: "Passeio de lancha privativa",
    description: "Um passeio só nosso de lancha pelas ilhas da região",
    price: "R$ 700",
    amount: 700,
    pixLink: https://nubank.com.br/cobrar/f619r/6aad5194-0589-48f7-abe1-fa4e89de785c,
    image: "images/Gemini_Generated_Image_pynqocpynqocpynq (2).jpg",
  },
 
];
