import { useParams } from "react-router-dom";
import { getProductById } from "../../../data/products";
import { ProductInfo } from "./ProductInfo";

export function ProductPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  return (
    <>
      <ProductInfo product={product} />
    </>
  );
}
