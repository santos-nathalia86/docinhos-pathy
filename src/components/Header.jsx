import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, navLinks } from "../data/site.js";
import logo from "../assets/logo-docinhos-da-pathy.webp";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const closeRef = useRef(null);
  const toggleRef = useRef(null);

  // Marca no menu a seção que está passando pelo meio da tela.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Drawer aberto: trava a rolagem da página, leva o foco para o botão de fechar
  // e fecha com Esc. Ao fechar, o foco volta para o botão do menu.
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.classList.add("menu-open");
    closeRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Docinhos da Pathy - início">
        <img src={logo} alt="" width="56" height="56" />
        <span>Docinhos <em>da Pathy</em></span>
      </a>

      {/* Fundo escurecido do drawer (só no celular/tablet) */}
      <div className={`nav-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden="true" onClick={() => setMenuOpen(false)} />

      <nav id="main-nav" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
        <div className="main-nav-top">
          <span className="main-nav-title">Menu</span>
          <button ref={closeRef} className="main-nav-close" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
            <Icon name="close" size={18} />
          </button>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={activeHref === link.href ? "true" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <WhatsAppButton className="button-primary main-nav-cta">Fazer encomenda</WhatsAppButton>
        <div className="main-nav-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Icon name="instagram" size={16} /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      </nav>

      <div className="header-actions">
        <WhatsAppButton className="button-primary button-small header-cta">Fazer encomenda</WhatsAppButton>
        <button
          ref={toggleRef}
          className="mobile-menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>
    </header>
  );
}
