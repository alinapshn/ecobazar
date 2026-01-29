import { createContext, useContext } from "react";
import { ProductModal } from "../components/ProductModal";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);
