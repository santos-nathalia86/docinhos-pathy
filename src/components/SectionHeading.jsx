import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, emphasis, intro, align = "split" }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title} <em>{emphasis}</em></h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
