import { ProductCard } from "../../components/ProductCard";
import { getRelatedProducts } from "../../../data/products";
import "./relatedProducts.scss";

export function RelatedProducts({ currentProduct }) {
  const related = getRelatedProducts(currentProduct, 4);

  return (
    <section className="related">
      <div className="container">
        <div className="related__wrapper">
          <h5>Related Products</h5>
          <div className="related__list">
            {related.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant={"default"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
