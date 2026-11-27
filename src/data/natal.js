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
    eyebrow: "Especial fim de ano",
    title: "Doces para um Natal",
    emphasis: "cheio de carinho.",
    intro: "Para a mesa da ceia, o amigo secreto e as lembrancinhas de fim de ano. Escolha os seus preferidos e combine tudo com a Pathy pelo WhatsApp. Encomende com antecedência!",
    cta: "Quero fazer minha encomenda de Natal",
  },

  // Faixa do pé do Hero (nomes curtos)
  destaques: ["Pavetone", "Pavetone de morango", "Ninho com morango", "Banoffee", "Romeu e Julieta", "Caixinhas de biscoito"],

  // Cards da seção. Fotos em src/assets/fotos/natal/ com o id no nome (ex.: pavetone.webp).
  // Sem foto, o card mostra o placeholder "Foto temporária".
  // imagePosition: qual parte da foto aparece no recorte do card (fotos em pé).
  // "photos" (no lugar de id/imageAlt): várias fotos no mesmo card, com "file" = nome do arquivo.
  produtos: [
    {
      id: "pavetone",
      name: "Pavetone",
      description: "Pavê de chocolate coberto com bolinhas crocantes de chocolate e detalhes dourados. Na travessa, para a ceia, ou na taça com tampa e laço vermelho, pronto para presentear.",
      // Duas fotos no mesmo card, lado a lado, cada uma com a sua etiqueta
      photos: [
        {
          file: "pavetone",
          label: "Na travessa",
          alt: "Pavetone na travessa, visto de cima, com cobertura de chocolate e borda de bolinhas de chocolate com pintinhas douradas",
          position: "center 45%",
        },
        {
          file: "pavetone-taca",
          label: "Na taça",
          alt: "Pavetone na taça, com camadas de creme branco e de chocolate, morangos no topo e tampa com laço vermelho, em frente a uma árvore de Natal",
          position: "center 30%",
        },
      ],
    },
    {
      id: "pavetone-morango",
      name: "Pavetone de morango",
      description: "Camadas de creme branco e de chocolate, finalizado com granulado, gotas de chocolate e morangos.",
      imageAlt: "Pavetone de morango visto de lado, com camadas de creme branco e de chocolate, granulado, gotas de chocolate branco e ao leite e morangos no topo",
    },
    {
      id: "ninho-com-morango",
      name: "Ninho com morango",
      description: "Creme de leite Ninho com morangos frescos, coberto com granulado e gotas de chocolate.",
      imageAlt: "Sobremesa de Ninho com morango com fatias de morango nas camadas e flor de morangos no topo, ao lado de um arranjo de Natal",
    },
    {
      id: "banoffee",
      name: "Banoffee",
      description: "Base crocante, camada cremosa de doce de leite com banana e chantilly, finalizado com canela.",
      imageAlt: "Banoffee visto de lado, com base de biscoito, camada de doce de leite e rosetas de chantilly polvilhadas com canela",
    },
    {
      id: "romeu-e-julieta",
      name: "Romeu e Julieta",
      description: "A dupla clássica de goiabada e queijo, com cobertura gratinada e uma arvorezinha de goiabada.",
      imageAlt: "Romeu e Julieta em travessa de vidro, com cobertura gratinada dourada e uma árvore de Natal de goiabada no centro",
      imagePosition: "center 42%",
    },
    {
      id: "caixinhas-biscoito",
      name: "Caixinhas de biscoito",
      description: "Biscoitos com \"Feliz Natal\" em relevo, em caixinhas de Natal para presentear.",
      imageAlt: "Caixinhas de Feliz Natal em verde e rosa com janelinha mostrando biscoitos com Feliz Natal em relevo",
    },
  ],

  messages: {
    general: "Olá, Pathy! Vim pelo site e gostaria de fazer uma encomenda de Natal.",
    product: (name) => `Olá, Pathy! Vim pelo site e gostaria de solicitar um orçamento de Natal: ${name}.`,
  },
};

const photos = import.meta.glob("../assets/fotos/natal/*.{webp,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findPhoto(id) {
  const match = Object.keys(photos).find((path) => path.split("/").pop().split(".")[0] === id);
  return match ? photos[match] : null;
}

// Cada card recebe a lista "photos" já com o endereço de cada foto (uma ou mais)
export const natalProducts = natal.produtos.map((product) => ({
  ...product,
  photos: (product.photos ?? [{ file: product.id, alt: product.imageAlt, position: product.imagePosition }]).map(
    (photo) => ({ ...photo, src: findPhoto(photo.file) })
  ),
}));
