import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { INSTAGRAM_URL, messages } from "../data/site.js";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <Reveal className="contact-card">
        <p className="eyebrow">Contato</p>
        <h2>Vamos adoçar a sua <em>próxima comemoração?</em></h2>
        <p>
          Conte para a Pathy o que você está planejando e solicite o seu orçamento.
          Vai ser um prazer fazer parte desse momento.
        </p>
        <div className="contact-actions">
          <WhatsAppButton message={messages.quote}>Solicitar orçamento</WhatsAppButton>
          <a className="button button-outline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Icon name="instagram" size={17} /> Ver no Instagram
          </a>
        </div>
      </Reveal>
    </section>
  );
}
