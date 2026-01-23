import { products } from "../../../data/products.js";
import { ProductCard } from "./ProductCard.jsx";
import "./introProducts.scss";

export function IntroProducts() {
  return (
    <section className="intro-prod">
      <div className="container">
        <div className="intro-prod__wrapper">
          <div className="intro-prod__header">
            <h3>Introducing Our Products</h3>
            <ul className="intro-prod__list">
              <li className="intro-prod__list-item">All</li>
              <li className="intro-prod__list-item">Vegetable</li>
              <li className="intro-prod__list-item">Fruit</li>
              <li className="intro-prod__list-item">Meat & Fish</li>
              <li className="intro-prod__list-item">View All</li>
            </ul>
          </div>

          <div className="intro-prod__products">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
