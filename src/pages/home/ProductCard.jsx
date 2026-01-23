import { calcDiscount } from "../../utils/discount.js";
import { formatCurrency } from "../../utils/money.js";
import RatingIcon from "../../assets/img/icons/rating.svg";
import CartIcon from "../../assets/img/icons/cart.svg";

export function ProductCard({ product }) {
  return (
    <div className="intro-prod__product">
      {product.discountPriceCents ? (
        <p className="intro-prod__product-sale">
          Sale{" "}
          <span>
            {calcDiscount(product.priceCents, product.discountPriceCents)}
          </span>
        </p>
      ) : null}
      <img src={product.image} />
      <div className="intro-prod__product-info">
        <div className="intro-prod__product-text">
          <p className="intro-prod__product-name">{product.name}</p>
          <p className="intro-prod__product-price">
            {product.discountPriceCents ? (
              <>
                {formatCurrency(product.discountPriceCents)}{" "}
                <span>{formatCurrency(product.priceCents)}</span>
              </>
            ) : (
              `${formatCurrency(product.priceCents)}`
            )}
          </p>
          <img className="intro-prod__product-rating" src={RatingIcon} />
        </div>
        <button className="intro-prod__product-cart">
          <img src={CartIcon} />
        </button>
      </div>
    </div>
  );
}
