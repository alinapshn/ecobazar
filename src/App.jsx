import { ModalProvider } from "./context/ModalProvider";
import { Header } from "./components/Header";
import { HomePage } from "./pages/home/HomePage";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </ModalProvider>
  );
}

export default App;
