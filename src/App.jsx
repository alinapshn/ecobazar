import { Routes, Route } from "react-router";
import { ModalProvider } from "./context/ModalProvider";
import { WishlistProvider } from "./context/WishlistProvider";
import { Header } from "./components/Header";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/single-product-page/ProductPage";
import { ShopPage } from "./pages/shop/ShopPage";
import { WishlistPage } from "./pages/wishlist/WishlistPage";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <ModalProvider>
      <WishlistProvider>
        <Header />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Routes>
        </main>
        <Subscribe />
        <Footer />
      </WishlistProvider>
    </ModalProvider>
  );
}

export default App;
