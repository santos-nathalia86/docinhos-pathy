// Configuração central do site: contato e textos ficam todos aqui.

// O número vem do arquivo .env (VITE_WHATSAPP_NUMBER), que não vai para o git.
// Formato: 55 + DDD + número, apenas dígitos. Veja .env.example.
// Sem o .env, usa um valor propositalmente inválido, para nenhum pedido ir a um desconhecido.
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000").replace(/\D/g, "");

export const INSTAGRAM_URL = "https://www.instagram.com/patricia_docinhosdapathy/";
export const INSTAGRAM_HANDLE = "@patricia_docinhosdapathy";
export const BRAND_NAME = "Docinhos da Pathy";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const messages = {
  general: "Olá, Pathy! Vim pelo site e gostaria de fazer uma encomenda.",
  quote: "Olá, Pathy! Vim pelo site e gostaria de solicitar um orçamento.",
  product: (name) => `Olá, Pathy! Vim pelo site e gostaria de solicitar um orçamento de: ${name}.`,
};

// Textos escritos pela Pathy: manter a redação dela ao editar.
export const hero = {
  eyebrow: "Bem-vinda à Docinhos da Pathy!",
  text: "Sou a Pathy, mãe do Heitor, e transformo festas em memórias afetivas através de doces personalizados.",
};

// Abertura exclusiva do celular (Boutique de Confeitaria). O computador usa "hero" acima.
export const heroMobile = {
  eyebrow: "Confeitaria artesanal",
  title: ["Uma dose de doçura para celebrar a ", "vida", "."],
  text: "Doces personalizados, criados especialmente para os seus momentos mais especiais.",
  cta: "Faça sua encomenda",
  link: "Conheça nossas delícias",
};

export const about = {
  eyebrow: "Sobre mim",
  title: ["Olá, eu sou a ", "Pathy!"],
  paragraphs: [
    "Minha história começou de um jeito bem simples: enrolando docinhos na cozinha de casa para a família e amigos.",
    "Mas meu coração se apaixonou de verdade quando comecei a fazer os doces para o aniversário de 1 aninho do meu filho, o Heitor. Cada docinho feito por mim, cada detalhe pensado com tanto amor para aquele dia tão especial, me fez perceber que era isso que eu queria fazer para sempre.",
    "Ali descobri que um doce vai muito além do sabor. Ele guarda uma memória, conta uma história e faz parte de momentos que a gente nunca esquece.",
    "Hoje, na Docinhos da Pathy, transformo esse amor de mãe em doces personalizados, feitos com muito carinho, dedicação e capricho, para adoçar e eternizar os momentos mais felizes da sua família - como fiz com a minha.",
  ],
  closing: "Seja bem-vinda ao meu mundo doce!",
};

export const orderSteps = [
  { title: "Escolha o produto ou inspiração", text: "Veja o catálogo e a galeria, ou separe uma referência do tema que você imaginou." },
  { title: "Entre em contato pelo WhatsApp", text: "Conte qual é a comemoração e o que você gostaria de encomendar." },
  { title: "Combine os detalhes da sua encomenda", text: "Tema, quantidades, data e orçamento são definidos em conversa com a Pathy." },
];

export function getWhatsAppLink(message = messages.general) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
