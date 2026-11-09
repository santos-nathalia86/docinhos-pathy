import Icon from "./Icon.jsx";
import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { galleryItems } from "../data/gallery.js";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/site.js";

export default function Gallery() {
  return (
    <section className="gallery-section" id="galeria">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Galeria"
          title="Cores, detalhes e"
          emphasis="muita personalização."
          align="center"
          intro="Um pouco dos trabalhos já realizados pela Pathy, para inspirar a sua próxima comemoração."
        />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} className={`gallery-item gallery-item--${item.size}`} delay={(index % 4) * 60}>
              <Photo src={item.src} alt={item.alt} position={item.position} />
            </Reveal>
          ))}
          <Reveal className="gallery-item gallery-item--wide">
            <a className="gallery-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Icon name="instagram" size={26} />
              <strong>Veja mais trabalhos no Instagram</strong>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
