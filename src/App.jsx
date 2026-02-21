import { Routes, Route } from "react-router";
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
import { BlogsPage } from "./pages/blog/BlogsPage";
import { SingleBlogPage } from "./pages/single-blog-page/SingleBlogPage";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { FaqsPage } from "./pages/faqs/FaqsPage";
import { SignIn } from "./pages/sign-in/SignIn";
import { SignUp } from "./pages/sign-up/SignUp";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
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
              <Route path="blog" element={<BlogsPage />} />
              <Route path="blog/:blogId" element={<SingleBlogPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faqs" element={<FaqsPage />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="*" element={<NotFoundPage />} />
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
