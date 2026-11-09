import Icon from "./Icon.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { hero, heroMobile } from "../data/site.js";
import HeroScene from "./HeroScene.jsx";
import { products } from "../data/products.js";

// Faixa corrida do celular: nomes reais do cardápio, sem o "personalizado(s)" do fim.
const marqueeItems = products.map((product) => product.name.replace(/\s+personalizad[oa]s?$/i, ""));

// Um único Hero para as duas telas: os textos "only-desktop" / "only-mobile"
// são trocados por CSS, e a composição do celular fica toda no global.css.
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Uma única forma orgânica rosa clarinho atrás da ilustração (decorativa) */}
      <div className="hero-blobs" aria-hidden="true">
        <svg className="hero-blob" viewBox="0 0 200 200"><path d="M46 31c25-22 74-25 104-4s45 63 28 96-55 59-94 55S12 148 9 113s12-60 37-82z" /></svg>
      </div>

      <HeroScene className="hero-media" />

      <div className="hero-copy">
        <p className="eyebrow">
          <span className="only-desktop">{hero.eyebrow}</span>
          <span className="only-mobile">{heroMobile.eyebrow}</span>
        </p>
        <h1>
          <span className="only-desktop">Doces feitos com <em>carinho</em> para momentos inesquecíveis.</span>
          <span className="only-mobile">{heroMobile.title[0]}<em>{heroMobile.title[1]}</em>{heroMobile.title[2]}</span>
        </h1>
        <p className="hero-description">
          <span className="only-desktop">{hero.text}</span>
          <span className="only-mobile">{heroMobile.text}</span>
        </p>
        <div className="hero-actions">
          <a className="button button-dark hero-products-link" href="#produtos">
            <span className="only-desktop">Conheça nossos produtos</span>
            <span className="only-mobile">{heroMobile.link}</span>
            <span className="hero-link-icon only-desktop"><Icon name="arrow" size={17} /></span>
            <span className="hero-link-icon only-mobile"><Icon name="arrowDown" size={15} /></span>
          </a>
          <WhatsAppButton className="button-outline hero-order-button">
            <span className="only-desktop">Faça sua encomenda</span>
            <span className="only-mobile">{heroMobile.cta}</span>
          </WhatsAppButton>
        </div>
      </div>

      {/* Só no celular: fita com o cardápio passando devagar (a lista se repete para emendar sem pulo) */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="hero-marquee-item">
              {item}
              <svg width="12" height="12" viewBox="-12 -10 24 20"><path d="M0 -3 C-4 -9 -12 -6 -10 0 C-8 5 0 9 0 9 C0 9 8 5 10 0 C12 -6 4 -9 0 -3 Z" /></svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
