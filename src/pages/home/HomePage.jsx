import { Header } from "../../components/Header";
import { Props } from "./Props";
import { IntroProducts } from "./IntroProducts";
import { Banners } from "./Banners";
import { Deals } from "./Deals";
import { Featured } from "./Featured";
import { Feedbacks } from "./Feedbacks";
import { products } from "../../../data/products";

export function HomePage() {
  return (
    <>
      <Header />
      <Props />
      <IntroProducts />
      <Banners />
      <Deals />
      <Featured products={products} />
      <Feedbacks />
    </>
  );
}
