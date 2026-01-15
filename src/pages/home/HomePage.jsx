import { Header } from "../../components/Header";
import { Props } from "./Props";
import { IntroProducts } from "./IntroProducts";
import { Banners } from "./Banners";

export function HomePage() {
  return (
    <>
      <Header />
      <Props />
      <IntroProducts />
      <Banners />
    </>
  );
}
