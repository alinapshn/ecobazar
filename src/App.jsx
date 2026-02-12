import { Routes, Route, Router } from "react-router";
import { ModalProvider } from "./context/ModalProvider";
import { WishlistProvider } from "./context/WishlistProvider";
import { CartProvider } from "./context/CartProvider";
import { Header } from "./components/Header";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/single-product-page/ProductPage";
import { ShopPage } from "./pages/shop/ShopPage";
import { WishlistPage } from "./pages/wishlist/WishlistPage";
import { CartPage } from "./pages/cart/CartPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ModalProvider>
          <Header />
          <main>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product/:productId" element={<ProductPage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Subscribe />
          <Footer />
        </ModalProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
