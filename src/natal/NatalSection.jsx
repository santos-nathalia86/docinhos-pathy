import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { natal, natalMenu, natalOthers } from "../data/natal.js";
import { Bow, Sparkle } from "./NatalShapes.jsx";

// Fotos do card: uma ou várias lado a lado
function CardPhotos({ item }) {
  return (
    <div className={`natal-card-photos ${item.photos.length > 1 ? "is-multi" : ""}`}>
      {item.photos.map((photo) => (
        <div key={photo.file} className={`natal-card-photo ${photo.cover ? "natal-card-photo--cover" : ""}`}>
          <Photo src={photo.src} alt={photo.alt} label={item.name} position={photo.position} />
        </div>
      ))}
    </div>
  );
}

// Item do cardápio: preço, rendimento, sabores, adicionais e botão de encomenda
function MenuCard({ item, delay }) {
  return (
    <Reveal as="article" className="natal-card" delay={delay}>
      <CardPhotos item={item} />
      <div className="natal-card-body">
        <div className="natal-card-head">
          <h3>{item.name}</h3>
          <p className="natal-price">{item.price}</p>
        </div>
        {item.serves && <p className="natal-serves">{item.serves}</p>}
        {item.description && <p className="natal-card-text">{item.description}</p>}
        {item.flavors && (
          <div className="natal-flavors">
            <p className="natal-flavors-label">{item.flavorsLabel}</p>
            <ul>
              {item.flavors.map((flavor) => <li key={flavor}>{flavor}</li>)}
            </ul>
          </div>
        )}
        {item.extras && (
          <ul className="natal-extras">
            {item.extras.map((extra) => (
              <li key={extra.label}><span>{extra.label}</span><strong>{extra.price}</strong></li>
            ))}
          </ul>
        )}
        <WhatsAppButton
          className="natal-button-wine natal-card-button"
          message={natal.messages.order(item.name)}
          ariaLabel={`Encomendar ${item.name} pelo WhatsApp`}
        >
          Encomendar
        </WhatsAppButton>
      </div>
    </Reveal>
  );
}

// Doces fora do cardápio: sem preço, com "Consultar valor"
function OtherCard({ item, delay }) {
  return (
    <Reveal as="article" className="natal-card natal-card--other" delay={delay}>
      <CardPhotos item={item} />
      <div className="natal-card-body">
        <h3>{item.name}</h3>
        <p className="natal-card-text">{item.description}</p>
        <WhatsAppButton
          className="button-card natal-button-card natal-card-button"
          message={natal.messages.quote(item.name)}
          ariaLabel={`Consultar o valor de ${item.name} pelo WhatsApp`}
        >
          Consultar valor
        </WhatsAppButton>
      </div>
    </Reveal>
  );
}

// Seção "Especial fim de ano" (item do menu com a árvore): o cardápio de Natal da Pathy.
// Textos, preços e fotos em src/data/natal.js.
export default function NatalSection() {
  const { section, messages, condicoes } = natal;
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

        <div className="natal-menu">
          {natalMenu.map((item, index) => <MenuCard key={item.id} item={item} delay={(index % 2) * 80} />)}
        </div>

        <div className="natal-terms">
          {condicoes.map((block, index) => (
            <Reveal key={block.title} className="natal-terms-box" delay={index * 80}>
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((text) => <li key={text}>{text}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="natal-others-title">{section.othersTitle}</Reveal>
        <div className="natal-others">
          {natalOthers.map((item, index) => <OtherCard key={item.id} item={item} delay={index * 80} />)}
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
