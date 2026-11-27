import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { natal, natalProducts } from "../data/natal.js";
import { Bow, Sparkle } from "./NatalShapes.jsx";

// Seção "Especial fim de ano" (item do menu com a árvore). Textos e produtos em src/data/natal.js.
export default function NatalSection() {
  const { section, messages } = natal;
  return (
    <section className="natal-section" id="natal">
      <div className="natal-section-decor" aria-hidden="true">
        <span className="natal-section-sparkle natal-section-sparkle--1"><Sparkle /></span>
        <span className="natal-section-sparkle natal-section-sparkle--2"><Sparkle /></span>
        <span className="natal-section-sparkle natal-section-sparkle--3"><Sparkle /></span>
      </div>
      <div className="section-shell">
        <div className="natal-section-bow" aria-hidden="true"><Bow width={56} /></div>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          emphasis={section.emphasis}
          align="center"
          intro={section.intro}
        />
        <div className="product-grid natal-grid">
          {natalProducts.map((product, index) => (
            <Reveal as="article" key={product.id} className="product-card natal-card" delay={(index % 3) * 80}>
              <div className="product-image-wrap">
                <Photo src={product.image} alt={product.imageAlt} label={product.name} position={product.imagePosition} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <WhatsAppButton
                  className="button-card natal-button-card"
                  message={messages.product(product.name)}
                  ariaLabel={`Solicitar orçamento de ${product.name} pelo WhatsApp`}
                >
                  Solicitar orçamento
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="natal-section-cta">
          <WhatsAppButton className="natal-button-wine" message={messages.general}>
            {section.cta}
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
