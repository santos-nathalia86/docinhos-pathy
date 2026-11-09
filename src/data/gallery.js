// Galeria: size aceita "tall", "wide" ou "regular" e define o espaço no mosaico.
// A ordem atual preenche o grid sem buracos; ao trocar fotos, mantenha os tamanhos.
import safari from "../assets/fotos/safari-palmeiras.webp";
import mesaFazendinha from "../assets/fotos/mesa-fazendinha.webp";
import fadas from "../assets/fotos/fadas-raquel.webp";
import cruz from "../assets/fotos/cruz-batizado.webp";
import astronauta from "../assets/fotos/astronauta-espaco.webp";
import borboletas from "../assets/fotos/borboletas-letra-m.webp";
import solPrincesa from "../assets/fotos/sol-princesa.webp";

export const galleryItems = [
  { id: "safari", src: safari, size: "tall", alt: "Doces com tema safári: palmeiras verdes com elefante, zebra, macaco, leão e girafa" },
  { id: "mesa-fazendinha", src: mesaFazendinha, size: "wide", position: "center 45%", alt: "Mesa de doces personalizados com tema fazendinha em rosa, com vaquinhas, porquinhos, pintinhos e pirulitos com o nome Alícia" },
  { id: "fadas", src: fadas, size: "tall", alt: "Pirulitos em tons pastel com fadas douradas, borboletas, flores e o nome Raquel" },
  { id: "cruz", src: cruz, size: "regular", alt: "Doces brancos e rosa decorados com cruz e flores em relevo" },
  { id: "astronauta", src: astronauta, size: "regular", alt: "Pirulitos de chocolate azul-marinho com astronauta, foguete e planetas" },
  { id: "borboletas", src: borboletas, size: "regular", alt: "Doces com a letra M dourada, flores e borboletas rosé" },
  { id: "sol-princesa", src: solPrincesa, size: "regular", alt: "Pirulitos rosa com sol amarelo, flores e laços lilás" },
];
