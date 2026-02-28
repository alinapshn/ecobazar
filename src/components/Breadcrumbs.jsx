import { useLocation, NavLink } from "react-router-dom";
import { products } from "../../data/products";
import HomeIcon from "../assets/img/breadcrumbs/home.svg";
import ArrowIcon from "../assets/img/breadcrumbs/arrow-right.svg";
import "./breadcrumbs.scss";

export function Breadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const pathnames = pathname.split("/").filter((x) => x);

  const formatName = (string) => {
    if (!string) return "";
    return string.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getProduct = (slug) => {
    return products.find((p) => String(p.id) === slug || p.slug === slug);
  };

  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__wrapper">
          <NavLink to="/" className="breadcrumbs__item">
            <img src={HomeIcon} alt="Home" />
          </NavLink>

          {pathnames.map((name, index) => {
            const isLast = index === pathnames.length - 1;
            const product = getProduct(name);

            let displayName = formatName(name);
            if (isLast && product) {
              displayName = product.title || product.name;
            } else if (name === "product") {
              displayName = "Shop";
            }

            let routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            if (name !== "shop" && name !== "product" && !product) {
              routeTo = `/shop?category=${name}`;
            } else if (name === "product") {
              routeTo = "/shop";
            }

            return (
              <div
                key={`${name}-${index}`}
                className="breadcrumbs__item-wrapper"
              >
                <img
                  src={ArrowIcon}
                  alt="separator"
                  className="breadcrumbs__arrow"
                />

                {isLast ? (
                  <span className="breadcrumbs__item breadcrumbs__item--active">
                    {displayName}
                  </span>
                ) : (
                  <NavLink to={routeTo} className="breadcrumbs__item">
                    {displayName}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
