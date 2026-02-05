import { ProductCard } from "../../components/ProductCard";
import "./productsGrid.scss";

export function ProductsGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={"default"} />
      ))}
    </div>
  );
}
