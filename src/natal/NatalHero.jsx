import Icon from "../components/Icon.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { hero } from "../data/site.js";
import { natal } from "../data/natal.js";
import NatalScene from "./NatalScene.jsx";
import { Bow, Heart, Ornament, Sparkle } from "./NatalShapes.jsx";

// Topo do site durante o Natal. Mesmos textos no computador e no celular;
// a composição de cada tela fica em natal.css (".hero--natal").
export default function NatalHero() {
  return (
    <section className="hero hero--natal" id="inicio">
      {/* Enfeites pendurados do teto e estrelinhas douradas (decorativos) */}
      <div className="natal-decor" aria-hidden="true">
        <span className="natal-hanging natal-hanging--1"><Ornament variant="heart" /></span>
        <span className="natal-hanging natal-hanging--2"><Ornament variant="heart" /></span>
        <span className="natal-hanging natal-hanging--3"><Ornament variant="stripes" /></span>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span key={n} className={`natal-sparkle natal-sparkle--${n}`}><Sparkle /></span>
        ))}
      </div>

      <NatalScene className="hero-media" />

      <div className="hero-copy">
        <p className="eyebrow natal-eyebrow">
          <span className="natal-eyebrow-text">
            <span className="natal-eyebrow-bow" aria-hidden="true"><Bow /></span>
            {natal.eyebrow}
          </span>
        </p>
        <h1>Doces feitos com <em>carinho</em> para momentos inesquecíveis.</h1>
        <p className="hero-description">{hero.text}</p>
        <div className="hero-actions">
          <a className="button natal-button-wine" href="#produtos">
            Conheça nossos produtos
            <Icon name="arrow" size={17} />
          </a>
          <WhatsAppButton className="natal-button-outline">Faça sua encomenda</WhatsAppButton>
        </div>
      </div>

      {/* Faixa com os destaques de Natal: parada no computador, correndo devagar no celular.
          A lista se repete para a volta emendar sem pulo (a cópia some no computador). */}
      <div className="natal-strip">
        <p className="natal-strip-track">
          {[...natal.destaques, ...natal.destaques].map((item, index) => (
            <span
              key={index}
              className="natal-strip-item"
              aria-hidden={index >= natal.destaques.length ? "true" : undefined}
              data-copy={index >= natal.destaques.length ? "" : undefined}
            >
              <Heart />
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
