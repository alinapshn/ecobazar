import { calcDiscount } from "../../utils/discount.js";
import { formatCurrency } from "../../utils/money.js";
import { useModal } from "../../context/ModalContext";
import RatingIcon from "../../assets/img/icons/rating.svg";
import CartIcon from "../../assets/img/icons/cart.svg";
import QuickViewIcon from "../../assets/img/icons/quick-view.svg";
import FavoritesIcon from "../../assets/img/icons/favorites.svg";
import "./productCard.scss";

export function ProductCard({ product, variant }) {
  const { openModal } = useModal();
  return (
    <div className={`product-card product-card--${variant}`}>
      <div
        className={`product-card__actions product-card__actions--${variant}`}
      >
        <button
          className={`product-card__actions-button product-card__actions-button--${variant}`}
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
      {product.discountPriceCents ? (
        <p className={`product-card__sale product-card__sale--${variant}`}>
          Sale{" "}
          <span>
            {calcDiscount(product.priceCents, product.discountPriceCents)}
          </span>
        </p>
      ) : null}
      <img src={product.image} />
      <div className={`product-card__info product-card__info--${variant}`}>
        <div
          className={`product-card__info-text product-card__info-text--${variant}`}
        >
          <p
            className={`product-card__info-name product-card__info-name--${variant}`}
          >
            {product.name}
          </p>
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
        >
          <img src={CartIcon} />
        </button>
      </div>
    </div>
  );
}
