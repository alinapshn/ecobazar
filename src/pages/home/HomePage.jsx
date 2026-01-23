import { Header } from "../../components/Header";
import { Props } from "./Props";
import { IntroProducts } from "./IntroProducts";
import { Banners } from "./Banners";
import { Deals } from "./Deals";

export function HomePage() {
  return (
    <>
      <Header />
      <Props />
      <IntroProducts />
      <Banners />
      <Deals />
    </>
  );
}
