import productsJson from "../backend/products.json";
import { Product } from "./products-class.js";

function loadProducts() {
  return productsJson.map((productDetails) => {
    return new Product(productDetails);
  });
}

export const products = loadProducts();

export function getProductById(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getProductsInStock() {
  return products.filter((product) => product.inStock);
}

export function getProductsWithDiscount() {
  return products.filter((product) => product.hasDiscount());
}

export function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter((product) => {
     return product.category === currentProduct.category &&
        product.id !== currentProduct.id;
    })
    .slice(0, limit);
}
