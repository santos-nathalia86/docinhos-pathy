import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { getPrint, testimonials } from "../data/testimonials.js";

// Comentários longos ganham mais espaço no mural.
const isLong = (item) => item.text.length > 70;

function FacebookMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

function Comment({ item, index }) {
  const print = getPrint(item.id);

  // Com o print real anonimizado, ele substitui a versão montada em HTML.
  if (print) {
    return (
      <figure className="comment comment--print">
        <img src={print} alt={`Comentário de cliente no ${item.source}: ${item.text}`} loading="lazy" />
      </figure>
    );
  }

  return (
    <figure className={`comment comment--${item.source.toLowerCase()} ${isLong(item) ? "comment--long" : ""}`}>
      <header className="comment-head">
        <span className={`comment-avatar comment-avatar--${index % 4}`} aria-hidden="true" />
        <span className="comment-name" role="img" aria-label="Nome da cliente ocultado" />
        <span className="comment-platform">
          {item.source === "Facebook" ? <FacebookMark /> : <Icon name="instagram" size={14} />}
          {item.source}
        </span>
      </header>
      <blockquote className="comment-text"><p>{item.text}</p></blockquote>
      {item.context && <figcaption className="comment-context">{item.context}</figcaption>}
    </figure>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // No celular o mural vira um carrossel (rolagem nativa com encaixe, um comentário por vez).
  // Os pontinhos acompanham o comentário visível; no computador eles ficam escondidos.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Array.from(track.children).indexOf(entry.target));
        });
      },
      { root: track, threshold: 0.6 }
    );
    Array.from(track.children).forEach((slot) => observer.observe(slot));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const track = trackRef.current;
    const slot = track?.children[index];
    if (slot) track.scrollTo({ left: slot.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="section-shell">
        <Reveal className="testimonials-heading">
          <p className="eyebrow">Depoimentos</p>
          <h2>Quem prova, guarda <em>carinho.</em></h2>
          <p className="testimonials-lead">
            Cada encomenda deixa uma lembrança. E cada mensagem é um carinho que recebemos de volta.
          </p>
          <p className="testimonials-note">Comentários reais do Instagram e do Facebook. Nomes e fotos ocultados.</p>
        </Reveal>

        <ul ref={trackRef} className="comment-wall" aria-label="Comentários de clientes">
          {testimonials.map((item, index) => (
            <Reveal as="li" key={item.id} className="comment-slot" delay={(index % 3) * 70}>
              <Comment item={item} index={index} />
            </Reveal>
          ))}
        </ul>
        <div className="comment-dots">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === active ? "is-active" : ""}
              aria-label={`Ver comentário ${index + 1} de ${testimonials.length}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
