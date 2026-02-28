import React from "react";
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
    return products.find(
      (p) => String(p.id) === slug || p.slug === slug
    );
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

            if (name === "product") {
              return (
                <div key={name} className="breadcrumbs__item-wrapper">
                  <img src={ArrowIcon} alt="separator" className="breadcrumbs__arrow" />
                  <NavLink to="/shop" className="breadcrumbs__item">Shop</NavLink>
                </div>
              );
            }

            if (product && isLast) {
              return (
                <React.Fragment key={name}>
                  <div className="breadcrumbs__item-wrapper">
                    <img src={ArrowIcon} alt="separator" className="breadcrumbs__arrow" />
                    <NavLink to={`/shop?category=${product.category}`} className="breadcrumbs__item">
                      {formatName(product.category)}
                    </NavLink>
                  </div>
                  
                  <div className="breadcrumbs__item-wrapper">
                    <img src={ArrowIcon} alt="separator" className="breadcrumbs__arrow" />
                    <span className="breadcrumbs__item breadcrumbs__item--active">
                      {product.title || product.name} 
                    </span>
                  </div>
                </React.Fragment>
              );
            }

            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

            return (
              <div key={name} className="breadcrumbs__item-wrapper">
                <img src={ArrowIcon} alt="separator" className="breadcrumbs__arrow" />
                {isLast ? (
                  <span className="breadcrumbs__item breadcrumbs__item--active">
                    {formatName(name)}
                  </span>
                ) : (
                  <NavLink to={routeTo} className="breadcrumbs__item">
                    {formatName(name)}
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