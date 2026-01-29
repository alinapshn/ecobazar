import { ModalProvider } from "./context/ModalProvider";
import { HomePage } from "./pages/home/HomePage";
import "./App.scss";

function App() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}

export default App;
