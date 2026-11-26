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
  destaques: ["Biscoitos decorados", "Cupcakes", "Maçãs do amor", "Pirulitos"],

  // Cards da seção. Fotos: salve em src/assets/fotos/natal/ com o id no nome
  // (ex.: biscoitos.webp). Sem foto, o card mostra o placeholder "Foto temporária".
  produtos: [
    {
      id: "biscoitos",
      name: "Biscoitos decorados de Natal",
      description: "Biscoitos decorados com o tema de Natal, para enfeitar a mesa da ceia e para presentear.",
      imageAlt: "Biscoitos decorados de Natal",
    },
    {
      id: "cupcakes",
      name: "Cupcakes de Natal",
      description: "Cupcakes com decoração natalina para deixar a sua ceia ainda mais doce.",
      imageAlt: "Cupcakes com decoração de Natal",
    },
    {
      id: "macas-do-amor",
      name: "Maçãs do amor de Natal",
      description: "Maçãs do amor com detalhes de Natal, lindas na mesa e como lembrancinha.",
      imageAlt: "Maçãs do amor decoradas para o Natal",
    },
    {
      id: "pirulitos",
      name: "Pirulitos de Natal",
      description: "Pirulitos decorados de Natal, perfeitos para lembrancinhas e para o amigo secreto.",
      imageAlt: "Pirulitos decorados de Natal",
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
