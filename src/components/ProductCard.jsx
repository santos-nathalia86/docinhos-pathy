import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { messages } from "../data/site.js";

export default function ProductCard({ product, delay }) {
  return (
    <Reveal as="article" className="product-card" delay={delay}>
      <div className="product-image-wrap">
        <Photo src={product.image} alt={product.imageAlt} label={product.name} position={product.imagePosition} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <WhatsAppButton
          className="button-card"
          message={messages.product(product.name)}
          ariaLabel={`Solicitar orçamento de ${product.name} pelo WhatsApp`}
        >
          Solicitar orçamento
        </WhatsAppButton>
      </div>
    </Reveal>
  );
}
