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
  destaques: ["Pavetone", "Pavetone de morango", "Ninho com morango", "Pavetone na taça", "Caixinhas de biscoito"],

  // Cards da seção. Fotos em src/assets/fotos/natal/ com o id no nome (ex.: pavetone.webp).
  // Sem foto, o card mostra o placeholder "Foto temporária".
  // imagePosition: qual parte da foto aparece no recorte do card (fotos em pé).
  produtos: [
    {
      id: "pavetone",
      name: "Pavetone",
      description: "Pavê de chocolate coberto com bolinhas crocantes de chocolate e detalhes dourados.",
      imageAlt: "Pavetone visto de cima, com cobertura de chocolate e borda de bolinhas de chocolate com pintinhas douradas",
      imagePosition: "center 45%",
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
      id: "pavetone-taca",
      name: "Pavetone na taça",
      description: "O pavetone em porção individual, na taça com tampa e laço vermelho: um presente de Natal pronto.",
      imageAlt: "Pavetone em taça com camadas de creme branco e de chocolate, morangos no topo e tampa com laço vermelho, em frente a uma árvore de Natal",
      imagePosition: "center 30%",
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

export const natalProducts = natal.produtos.map((product) => ({ ...product, image: findPhoto(product.id) }));
