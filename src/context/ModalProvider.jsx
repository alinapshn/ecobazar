import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { ProductModal } from "../components/ProductModal";

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
   console.log("ok", product.name);
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    (setIsOpen(false), setSelectedProduct(null));
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <ProductModal
        isOpen={isOpen}
        product={selectedProduct}
        onClose={closeModal}
      />
    </ModalContext.Provider>
  );
};
