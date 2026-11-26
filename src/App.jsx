import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Icon from "./components/Icon.jsx";
import { getWhatsAppLink } from "./data/site.js";
import { NATAL_ATIVO } from "./data/natal.js";
import NatalSection from "./natal/NatalSection.jsx";
import SantaHat from "./natal/SantaHat.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        {NATAL_ATIVO && <NatalSection />}
        <Testimonials />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Fazer uma encomenda pelo WhatsApp"
      >
        <Icon name="whatsapp" size={26} />
        {NATAL_ATIVO && <SantaHat />}
      </a>
    </>
  );
}
