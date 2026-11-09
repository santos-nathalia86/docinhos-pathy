import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import { about } from "../data/site.js";
import patiPhoto from "../assets/fotos/pati.webp";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        <Reveal className="about-heading">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title[0]}<em>{about.title[1]}</em></h2>
        </Reveal>

        <Reveal className="about-visual">
          <Photo className="about-photo" src={patiPhoto} label="Pathy" alt="Pathy, a confeiteira, sorrindo com dólmã e faixa estampados com donuts e cupcakes" />
        </Reveal>

        <Reveal className="about-body" delay={100}>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="about-closing">{about.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
