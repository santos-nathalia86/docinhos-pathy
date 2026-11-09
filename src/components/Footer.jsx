import Icon from "./Icon.jsx";
import { BRAND_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, getWhatsAppLink } from "../data/site.js";
import logo from "../assets/logo-docinhos-da-pathy.webp";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="wordmark" href="#inicio" aria-label="Docinhos da Pathy - início"><img src={logo} alt="" width="84" height="84" /></a>
        </div>

        <div className="footer-contact">
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={17} /> WhatsApp</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Icon name="instagram" size={17} /> {INSTAGRAM_HANDLE}</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
    </footer>
  );
}
