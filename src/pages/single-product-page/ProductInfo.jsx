import { ProductDetailContent } from "../../components/ProductDeatilContent";
import "./productInfo.scss";

export function ProductInfo({ product }) {
  return (
    <section className="product-info">
      <div className="container">
        <ProductDetailContent product={product} />
      </div>
    </section>
  );
}
