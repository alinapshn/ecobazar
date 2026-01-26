import { calcDiscount } from "../../utils/discount.js";
import { formatCurrency } from "../../utils/money.js";
import RatingIcon from "../../assets/img/icons/rating.svg";
import CartIcon from "../../assets/img/icons/cart.svg";
import "./productCard.scss";

export function ProductCard({ product, variant }) {
  return (
    <div className={`product-card product-card--${variant}`}>
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
        <div className={`product-card__info-text product-card__info-text--${variant}`}>
          <p className={`product-card__info-name product-card__info-name--${variant}`}>{product.name}</p>
          <p className={`product-card__info-price product-card__info-price--${variant}`}>
            {product.discountPriceCents ? (
              <>
                {formatCurrency(product.discountPriceCents)}{" "}
                <span>{formatCurrency(product.priceCents)}</span>
              </>
            ) : (
              `${formatCurrency(product.priceCents)}`
            )}
          </p>
          <img className={`product-card__info-rating product-card__info-rating--${variant}`} src={RatingIcon} />
        </div>
        <button className={`product-card__info-cart product-card__info-cart--${variant}`}>
          <img src={CartIcon} />
        </button>
      </div>
    </div>
  );
}
