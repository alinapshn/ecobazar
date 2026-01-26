import { ProductCard } from "./ProductCard";
import "./featured.scss";

const featuredIds = ["001", "009", "010", "005", "008"];

export function Featured({ products }) {
  const featuredProducts = products.filter((product) =>
    featuredIds.includes(product.id),
  );

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__wrapper">
          <h3 className="featured__title">Featured Products</h3>
          <div className="featured__products">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant={"featured"}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
