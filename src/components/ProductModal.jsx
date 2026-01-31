import { useEffect } from "react";
import { ProductDetailContent } from "./ProductDeatilContent";
import "./productModal.scss";

export function ProductModal({ isOpen, product, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]); 
  
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="product-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ProductDetailContent
          product={product}
          onClose={onClose}
          isModal={true}
        />
      </section>
    </div>
  );
}
