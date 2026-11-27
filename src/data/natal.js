// Tema especial de Natal / fim de ano.
// Para desligar depois das festas, troque NATAL_ATIVO para false: o site volta ao visual de sempre
// (Hero com a cena da confeitaria, menu sem "Especial fim de ano" e botão do WhatsApp sem gorro).

export const NATAL_ATIVO = true;

export const natal = {
  // Topo do site (computador e celular usam os mesmos textos durante o Natal)
  eyebrow: "Coleção especial de Natal",

  // Item do menu e seção da página
  nav: { label: "Especial fim de ano", shortLabel: "Natal", emoji: "🎄", href: "#natal" },
  section: {
    eyebrow: "Cardápio de Natal",
    title: "Doces para um Natal",
    emphasis: "cheio de carinho.",
    intro: "Panetones, sobremesas e biscoitos para a ceia de Natal e de Ano-Novo. Escolha os seus preferidos e faça a sua encomenda pelo WhatsApp: recebemos encomendas até o dia 22/12.",
    othersTitle: "Outras delícias de Natal",
    cta: "Quero fazer minha encomenda de Natal",
  },

  // Faixa do pé do Hero (nomes curtos)
  destaques: ["Panetones trufados", "Sobremesas na taça", "Sobremesas na travessa", "Pavetone", "Olho de sogra", "Delícia de abacaxi", "Caixa de biscoito"],

  // ===== Cardápio de Natal (do PDF da Pathy). Preços e sabores: editar aqui. =====
  // Fotos em src/assets/fotos/natal/, pelo nome do arquivo ("file").
  // position: qual parte da foto aparece no recorte do card (útil em fotos em pé).
  cardapio: [
    {
      id: "panetones",
      name: "Panetones trufados",
      price: "R$ 110,00",
      flavorsLabel: "Sabores",
      flavors: ["Ninho", "Brigadeiro"],
      extras: [
        { label: "Decoração com pasta americana", price: "+ R$ 10,00" },
        { label: "Decoração com frutas", price: "+ R$ 10,00" },
      ],
      photos: [
        { file: "panetone-trufado", alt: "Panetone trufado com cobertura de chocolate, granulado, brigadeiros e morangos no topo", position: "center 30%" },
      ],
    },
    {
      id: "sobremesa-taca",
      name: "Sobremesa na taça",
      price: "R$ 165,00",
      serves: "Serve 10 pessoas",
      flavorsLabel: "Sabores",
      flavors: ["Ninho com morango e chocolate", "Ninho com uva e chocolate", "Delícia de abacaxi", "Olho de sogra", "Pavetone"],
      photos: [
        { file: "taca-ninho-morango", alt: "Sobremesa na taça com creme, morangos nas camadas e no topo, e tampa com laço vermelho", position: "center 35%" },
        { file: "pavetone-taca", alt: "Pavetone na taça com camadas de creme branco e de chocolate, morangos no topo e tampa com laço vermelho", position: "center 30%" },
      ],
    },
    {
      id: "sobremesa-travessa",
      name: "Sobremesa na travessa",
      price: "R$ 145,00",
      serves: "Serve 10 pessoas",
      flavorsLabel: "Sabores",
      flavors: ["Ninho com morango e chocolate", "Ninho com uva e chocolate", "Delícia de abacaxi", "Olho de sogra", "Pavetone"],
      photos: [
        { file: "pavetone", alt: "Pavetone na travessa, visto de cima, com cobertura de chocolate e borda de bolinhas de chocolate com pintinhas douradas", position: "center 45%" },
        { file: "ninho-com-morango", alt: "Ninho com morango na travessa, com morangos nas camadas e flor de morangos no topo, ao lado de um arranjo de Natal" },
      ],
    },
    {
      id: "biscoito",
      name: "Biscoito amanteigado",
      price: "R$ 50,00",
      serves: "Caixa de biscoito",
      description: "Biscoitos amanteigados com \"Feliz Natal\" em relevo, em caixinhas de Natal para presentear.",
      // A primeira foto é a capa: fica maior que a outra no card ("cover")
      photos: [
        { file: "caixinhas-biscoito-papai-noel", cover: true, alt: "Caixinha de Natal rosa com Papai Noel e janelinha com biscoitos, ao lado de biscoitos em formato de Papai Noel", position: "center 45%" },
        { file: "caixinhas-biscoito", alt: "Caixinhas de Feliz Natal em verde e rosa com janelinha mostrando biscoitos com Feliz Natal em relevo" },
      ],
    },
  ],

  // Doces fora do cardápio em PDF: aparecem sem preço, com o botão "Consultar valor"
  outros: [
    {
      id: "banoffee",
      name: "Banoffee",
      description: "Base crocante, camada cremosa de doce de leite com banana e chantilly, finalizado com canela.",
      photos: [
        { file: "banoffee", alt: "Banoffee visto de lado, com base de biscoito, camada de doce de leite e rosetas de chantilly polvilhadas com canela" },
      ],
    },
    {
      id: "romeu-e-julieta",
      name: "Romeu e Julieta",
      description: "A dupla clássica de goiabada e queijo, com cobertura gratinada e uma arvorezinha de goiabada.",
      photos: [
        { file: "romeu-e-julieta", alt: "Romeu e Julieta em travessa de vidro, com cobertura gratinada dourada e uma árvore de Natal de goiabada no centro", position: "center 42%" },
      ],
    },
  ],

  // Condições do cardápio (redação da Pathy)
  condicoes: [
    {
      title: "Encomendas",
      items: [
        "Receberemos encomendas até o dia 22/12, então se programe para não ficar sem a sua sobremesa de Natal e Ano-Novo.",
        "A entrega é por conta do cliente.",
      ],
    },
    {
      title: "Pagamento",
      items: [
        "O seu pedido só vai ser reservado com o pagamento de pelo menos 50% do valor total do pedido.",
        "Aceitamos PIX e cartão de crédito via link (com acréscimo de 5% sobre o valor).",
      ],
    },
  ],

  messages: {
    general: "Olá, Pathy! Vim pelo site e gostaria de fazer uma encomenda do cardápio de Natal.",
    order: (name) => `Olá, Pathy! Vim pelo site e gostaria de encomendar do cardápio de Natal: ${name}.`,
    quote: (name) => `Olá, Pathy! Vim pelo site e gostaria de saber o valor de: ${name}.`,
  },
};

const photos = import.meta.glob("../assets/fotos/natal/*.{webp,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findPhoto(file) {
  const match = Object.keys(photos).find((path) => path.split("/").pop().split(".")[0] === file);
  return match ? photos[match] : null;
}

// Cada item recebe as fotos já com o endereço (src) de cada uma
const withPhotos = (item) => ({ ...item, photos: item.photos.map((photo) => ({ ...photo, src: findPhoto(photo.file) })) });

export const natalMenu = natal.cardapio.map(withPhotos);
export const natalOthers = natal.outros.map(withPhotos);
