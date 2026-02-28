import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Socials } from "./Socials";
import { calcDiscount } from "../utils/discount";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/money";
import { QuantityPicker } from "./QuantityPicker";
import RatingIcon from "../assets/img/icons/rating.svg";
import BrandIcon from "../assets/img/icons/brand.svg";
import WhiteCartIcon from "../assets/img/icons/cart-white.svg";
import GreenFavoriteIcon from "../assets/img/icons/favorites-green.svg";
import ExitIcon from "../assets/img/icons/exit.svg";
import CheckWhiteIcon from "../assets/img/icons/check-white.svg";
import "./productDetailContent.scss";

export function ProductDetailContent({ product, onClose, isModal = false }) {
  const productPath = `/shop/${product.category}/${product.id}`;

  const { addToCart } = useCart();

  const [localQuantity, setLocalQuantity] = useState(1);

  const handleIncrease = () => setLocalQuantity((prev) => prev + 1);
  const handleDecrease = () =>
    setLocalQuantity((prev) => Math.max(1, prev - 1));

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    let timer;
    if (isAdded) {
      timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isAdded]);

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    addToCart(product, localQuantity);
    setIsAdded(true);
  };

  return (
    <div
      className={`product-view__wrapper ${isModal ? "product-view--view" : ""}`}
    >
      {onClose && (
        <button className="product-view__close" onClick={onClose}>
          <img src={ExitIcon} alt="Close" />
        </button>
      )}

      <div className="product-view__image">
        {isModal ? (
          <Link to={productPath} onClick={onClose}>
            <img src={`/${product.image}`} alt={product.name} />
          </Link>
        ) : (
          <img src={`/${product.image}`} alt={product.name} />
        )}
      </div>

      <div className="product-view__content">
        <div className="product-view__title">
          <div className="product-view__title-heading">
            {isModal ? (
              <Link to={productPath} onClick={onClose}>
                <h4>{product.name}</h4>
              </Link>
            ) : (
              <h4>{product.name}</h4>
            )}
            {product.inStock ? (
              <p className="product-view__title-heading--true">In Stock</p>
            ) : (
              <p className="product-view__title-heading--false">Out of Stock</p>
            )}
          </div>
          <div className="product-view__title-rating">
            <img src={RatingIcon} />
            <p>4 Review</p>
          </div>
          <div className="product-view__title-price">
            <p className="product-view__title-price--discountprice">
              {product.discountPriceCents ? (
                <>
                  <span className="product-view__title-price--fullprice">
                    {formatCurrency(product.priceCents)}
                  </span>{" "}
                  {formatCurrency(product.discountPriceCents)}
                </>
              ) : (
                `${formatCurrency(product.priceCents)}`
              )}
            </p>
            <p className="">
              {product.discountPriceCents ? (
                <p className="product-view__title-price--discount">
                  <span>
                    {calcDiscount(
                      product.priceCents,
                      product.discountPriceCents,
                    )}
                  </span>{" "}
                  Off
                </p>
              ) : null}
            </p>
          </div>
        </div>
        <div className="product-view__info">
          <div className="product-view__info-icons">
            <div className="product-view__info-brand">
              <p>Brand:</p>
              <img src={BrandIcon} />
            </div>

            <Socials />
          </div>
          <p className="product-view__info-text">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>
        </div>
        <div className="product-view__buttons">
          <QuantityPicker
            quantity={localQuantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onChange={(val) => setLocalQuantity(Number(val))}
          />

          {product.inStock ? (
            <button
              className="product-view__buttons-cart button"
              onClick={handleAddToCartClick}
            >
              {isAdded ? (
                <>
                  Added to Cart <img src={CheckWhiteIcon} />
                </>
              ) : (
                <>
                  Add to Cart <img src={WhiteCartIcon} />
                </>
              )}
            </button>
          ) : (
            <button
              className="product-view__buttons-cart button button--disabled"
              onClick={handleAddToCartClick}
              disabled
            >
              Add to Cart
            </button>
          )}

          <button className="product-view__buttons-favorite">
            <img src={GreenFavoriteIcon} />
          </button>
        </div>
        <div className="product-view__additional">
          <p>
            Category: <span>{product.category}</span>
          </p>
          <p>
            Tag: <span>{product.tags.join(" ")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
