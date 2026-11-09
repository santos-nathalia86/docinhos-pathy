// Comentários reais de clientes, transcritos do Instagram e do Facebook da Pathy.
// Por privacidade, o site NÃO mostra nome, @ nem foto: no mural eles aparecem borrados.
// Erros de digitação foram corrigidos de leve, sem mudar o sentido; os emojis são os originais.
//
// PRINTS REAIS: quando houver o print anonimizado de um comentário (nome e foto já borrados),
// salve em src/assets/depoimentos/ com o mesmo "id" no nome (ex.: masha.webp). O mural passa
// a mostrar o print no lugar da versão montada em HTML, usando "text" como texto alternativo.
//
// "context" (opcional) = tema da festa ou produto, quando se sabe.
// A ordem alterna comentários longos e curtos para o mural ficar equilibrado.
export const testimonials = [
  {
    id: "masha",
    text: "Apaixonada 💘 Super amei tudo, muito lindo e gostoso! Mais uma vez você arrasou, amiga!! Obrigada, viu? Deus te abençoe sempre.",
    source: "Facebook",
    context: "Festa Masha e o Urso",
  },
  {
    id: "amamos",
    text: "Amamos!!! Estavam maravilhosos!!!",
    source: "Instagram",
  },
  {
    id: "detalhe",
    text: "Eu me apaixono em cada detalhe 💜",
    source: "Instagram",
  },
  {
    id: "delicado",
    text: "Que trabalho delicado o seu... em tudo que faz. Torço pelo seu sucesso 😍 de verdade. Parabéns 👏👏👏",
    source: "Instagram",
  },
  {
    id: "lindo-e-delicioso",
    text: "Tudo tão lindo e delicioso 😍❤️👏🏽",
    source: "Instagram",
  },
  {
    id: "lindo",
    text: "Estava tudo tão lindo...",
    source: "Instagram",
  },
  {
    id: "pao-de-mel",
    text: "Que delícia de pão de mel... fez lembrar da minha festa!!! Parabéns pelo capricho!!",
    source: "Instagram",
    context: "Pães de mel",
  },
  {
    id: "perfeicao",
    text: "Que perfeição! Parabéns, Deus te abençoe sempre ❤️🙏",
    source: "Instagram",
  },
  {
    id: "a-melhor",
    text: "O mais perfeito! Você é a melhor ❤️",
    source: "Instagram",
  },
];

// Prints anonimizados (opcionais), ligados ao comentário pelo nome do arquivo.
const prints = import.meta.glob("../assets/depoimentos/*.{webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

export const getPrint = (id) =>
  Object.entries(prints).find(([path]) => path.split("/").pop().replace(/\.\w+$/, "") === id)?.[1];
