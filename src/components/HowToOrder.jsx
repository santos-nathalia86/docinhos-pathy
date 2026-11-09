import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { orderSteps } from "../data/site.js";

export default function HowToOrder() {
  return (
    <section className="how-to-order" id="como-encomendar">
      <div className="section-shell">
        <SectionHeading eyebrow="Como encomendar" title="Encomendar é" emphasis="simples assim." align="center" />
        <ol className="order-steps">
          {orderSteps.map((step, index) => (
            <Reveal as="li" key={step.title} className="order-step" delay={index * 100}>
              <span className="order-step-number" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
