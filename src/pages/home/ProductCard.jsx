import { calcDiscount } from "../../utils/discount.js";
import { formatCurrency } from "../../utils/money.js";
import RatingIcon from "../../assets/img/icons/rating.svg";
import CartIcon from "../../assets/img/icons/cart.svg";
import "./productCard.scss";

export function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.discountPriceCents ? (
        <p className="product-card__sale">
          Sale{" "}
          <span>
            {calcDiscount(product.priceCents, product.discountPriceCents)}
          </span>
        </p>
      ) : null}
      <img src={product.image} />
      <div className="product-card__info">
        <div className="product-card__info-text">
          <p className="product-card__info-name">{product.name}</p>
          <p className="product-card__info-price">
            {product.discountPriceCents ? (
              <>
                {formatCurrency(product.discountPriceCents)}{" "}
                <span>{formatCurrency(product.priceCents)}</span>
              </>
            ) : (
              `${formatCurrency(product.priceCents)}`
            )}
          </p>
          <img className="product-card__info-rating" src={RatingIcon} />
        </div>
        <button className="product-card__info-cart">
          <img src={CartIcon} />
        </button>
      </div>
    </div>
  );
}
