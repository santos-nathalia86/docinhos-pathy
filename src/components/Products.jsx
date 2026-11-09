import ProductCard from "./ProductCard.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { products } from "../data/products.js";

export default function Products() {
  return (
    <section className="section-shell" id="produtos">
      <SectionHeading
        eyebrow="Produtos"
        title="Um catálogo para"
        emphasis="adoçar a sua festa."
        align="center"
        intro="Escolha o que combina com a sua comemoração e peça um orçamento direto pelo WhatsApp. Cada encomenda é combinada com você."
      />
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} delay={(index % 3) * 80} />
        ))}
      </div>
    </section>
  );
}
