import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { calcDiscount } from "../utils/discount.js";
import { formatCurrency } from "../utils/money.js";
import { useModal } from "../context/ModalContext";
import { useWishlist } from "../context/WishlistContext.js";
import { useCart } from "../context/CartContext.js";
import RatingIcon from "../assets/img/icons/rating.svg";
import CartIcon from "../assets/img/icons/cart.svg";
import CheckIcon from "../assets/img/icons/check.svg";
import QuickViewIcon from "../assets/img/icons/quick-view.svg";
import FavoritesIcon from "../assets/img/icons/favorites.svg";
import "./productCard.scss";

export function ProductCard({ product, variant }) {
  const { openModal } = useModal();
  const productPatch = `/product/${product.id}`;

  const { wishlist, handleToggleWishlist } = useWishlist();
  const isFavorite = wishlist?.some((item) => item.id === product.id);

  const { addToCart } = useCart();

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
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className={`product-card product-card--${variant}`}>
      <div
        className={`product-card__actions product-card__actions--${variant}`}
      >
        <button
          className={`product-card__actions-button product-card__actions-button--${variant} ${isFavorite ? "active" : ""}`}
          onClick={() => {
            handleToggleWishlist(product);
          }}
        >
          <img src={FavoritesIcon} />
        </button>
        <button
          className={`product-card__actions-button product-card__actions-button--${variant}`}
          onClick={() => openModal(product)}
        >
          <img src={QuickViewIcon} />
        </button>
      </div>
      {!product.inStock ? (
        <p
          className={`product-card__status product-card__status--stock product-card__status--${variant}`}
        >
          Out of stock
        </p>
      ) : product.discountPriceCents ? (
        <p
          className={`product-card__status product-card__status--sale product-card__status--${variant}`}
        >
          Sale{" "}
          <span>
            {calcDiscount(product.priceCents, product.discountPriceCents)}
          </span>
        </p>
      ) : null}

      <Link className="product-card__image" to={productPatch}>
        <img src={`/${product.image}`} />
      </Link>

      <div className={`product-card__info product-card__info--${variant}`}>
        <div
          className={`product-card__info-text product-card__info-text--${variant}`}
        >
          <Link to={productPatch}>
            <p
              className={`product-card__info-name product-card__info-name--${variant}`}
            >
              {product.name}
            </p>
          </Link>
          <p
            className={`product-card__info-price product-card__info-price--${variant}`}
          >
            {product.discountPriceCents ? (
              <>
                {formatCurrency(product.discountPriceCents)}{" "}
                <span>{formatCurrency(product.priceCents)}</span>
              </>
            ) : (
              `${formatCurrency(product.priceCents)}`
            )}
          </p>
          <img
            className={`product-card__info-rating product-card__info-rating--${variant}`}
            src={RatingIcon}
          />
        </div>
        <button
          className={`product-card__info-cart product-card__info-cart--${variant}`}
          onClick={handleAddToCartClick}
          disabled={!product.inStock || isAdded}
        >
          {isAdded ? (
            <img src={CheckIcon} alt="Added" className="icon-checkmark" />
          ) : (
            <img src={CartIcon} alt="Add to cart" />
          )}
        </button>
      </div>
    </div>
  );
}
