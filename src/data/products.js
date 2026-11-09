// Catálogo: edite nomes e descrições aqui.
// Fotos: salve em src/assets/fotos/produtos/ com o id da categoria no nome
// (ex.: cupcakes.jpg). A foto entra sozinha no card; sem foto, aparece o
// placeholder identificado como "Foto temporária".
const photos = import.meta.glob("../assets/fotos/produtos/*.{webp,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findPhoto(id) {
  const match = Object.keys(photos).find((path) => path.split("/").pop().split(".")[0] === id);
  return match ? photos[match] : null;
}

const categories = [
  {
    id: "paes-de-mel",
    name: "Pães de mel personalizados",
    description: "Pães de mel decorados e personalizados para combinar com o tema da sua comemoração.",
    imageAlt: "Pães de mel 3D com tema de circo, em vermelho e branco com estrelas douradas e bichinhos no topo: leão, elefante, coelho na cartola, foca e macaco",
  },
  {
    id: "biscoitos",
    name: "Biscoitos decorados",
    description: "Biscoitos personalizados com cores, formatos e detalhes especiais para cada ocasião.",
    imageAlt: "Biscoitos decorados em formato de número 5, com pasta americana verde, quadradinhos coloridos e o nome Ravi",
  },
  {
    id: "cupcakes",
    name: "Cupcakes personalizados",
    description: "Cupcakes decorados para deixar a mesa da sua festa ainda mais especial.",
    imageAlt: "Cupcakes decorados com bichinhos do safári, como leão, macaco, elefante e girafa, sobre discos verdes com florzinhas",
  },
  {
    id: "cake-pops",
    name: "Cake pops personalizados",
    description: "Bolinhos no palito decorados um a um, com personagens e detalhes do tema da sua festa.",
    imageAlt: "Cake pops em forma de caranguejos cor-de-rosa sobre bases de areia com conchas e estrelas-do-mar douradas",
  },
  {
    id: "macas-do-amor",
    name: "Maçãs do amor personalizadas",
    description: "Maçãs do amor decoradas com detalhes do tema, para encantar na mesa e nas lembrancinhas.",
    imageAlt: "Maçãs do amor cobertas de folhas verdes, com asas brancas, coração, flor salmão e estrelinhas douradas",
  },
  {
    id: "pirulitos",
    name: "Pirulitos personalizados",
    description: "Pirulitos decorados que acompanham o tema e a identidade da comemoração.",
    imageAlt: "Pirulitos personalizados em lilás com o nome Maria Clara, o número 6, sol, camaleão e princesa de tranças douradas",
  },
  {
    id: "trufas-cone",
    name: "Trufas cone personalizadas",
    description: "Cones recheados e decorados com todo o capricho para combinar com o tema da sua festa.",
    imageAlt: "Trufas cone em forma de árvores encantadas, com copa de babados rosa, borboletas e portinhas no tronco",
  },
  {
    id: "palha-italiana",
    name: "Palha italiana personalizada",
    description: "Palha italiana decorada com detalhes do tema, para surpreender na mesa e nas lembrancinhas.",
    imageAlt: "Palhas italianas decoradas como casinhas de fada cor-de-rosa, com telhado de babados, chaminé verde e porta de madeira com corações",
  },
  {
    id: "cake-cilindro",
    name: "Cake cilindro personalizado",
    description: "Bolo alto em formato de cilindro, decorado com o tema, o nome e a idade de quem está comemorando.",
    imageAlt: "Cake cilindro cor-de-rosa com o número 17, balões rosa e brancos com fitas e a frase Parabéns Maria Clara na base",
  },
];

export const products = categories.map((category) => ({ ...category, image: findPhoto(category.id) }));
