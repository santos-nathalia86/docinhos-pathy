import Icon from "./Icon.jsx";
import { getWhatsAppLink } from "../data/site.js";

export default function WhatsAppButton({ message, className = "button-primary", ariaLabel, children }) {
  return (
    <a
      className={`button ${className}`}
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <Icon name="whatsapp" size={17} />
      {children}
    </a>
  );
}
