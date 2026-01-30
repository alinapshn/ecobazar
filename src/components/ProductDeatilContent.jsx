import { calcDiscount } from "../utils/discount";
import { formatCurrency } from "../utils/money";
import RatingIcon from "../assets/img/icons/rating.svg";
import BrandIcon from "../assets/img/icons/brand.svg";
import FacebookIcon from "../assets/img/icons/facebook.svg";
import TwitterIcon from "../assets/img/icons/twitter.svg";
import PinterestIcon from "../assets/img/icons/pinterest.svg";
import InstagramIcon from "../assets/img/icons/instagram.svg";
import MinusIcon from "../assets/img/icons/minus.svg";
import PlusIcon from "../assets/img/icons/plus.svg";
import WhiteCartIcon from "../assets/img/icons/cart-white.svg";
import GreenFavoriteIcon from "../assets/img/icons/favorites-green.svg";
import ExitIcon from "../assets/img/icons/exit.svg";
import "./productDetailContent.scss";

export function ProductDetailContent({ product, onClose, isModal = false }) {
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
        <img src={`/${product.image}`} alt={product.name} />
      </div>

      <div className="product-view__content">
        <div className="product-view__title">
          <div className="product-view__title-heading">
            <h4>{product.name}</h4>
            {product.inStock ? (
              <p className="product-view__title-heading--true">In Stock</p>
            ) : (
              <p className="product-view__title-heading--false">
                Out of Stock
              </p>
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
            <div className="product-view__info-socials">
              <p>Share item: </p>
              <div className="product-view__info-social">
                <button>
                  <img src={FacebookIcon} />
                </button>
                <button>
                  <img src={TwitterIcon} />
                </button>
                <button>
                  <img src={PinterestIcon} />
                </button>
                <button>
                  <img src={InstagramIcon} />
                </button>
              </div>
            </div>
          </div>
          <p className="product-view__info-text">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>
        </div>
        <div className="product-view__buttons">
          <div className="product-view__buttons-count">
            <button>
              <img src={MinusIcon} />
            </button>
            <p>5</p>
            <button>
              <img src={PlusIcon} />
            </button>
          </div>
          <button className="product-view__buttons-cart button">
            Add to Cart <img src={WhiteCartIcon} />
          </button>
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
