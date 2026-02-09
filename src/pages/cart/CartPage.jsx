import { formatCurrency } from "../../utils/money";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import MinusIcon from "../../assets/img/icons/minus.svg";
import PlusIcon from "../../assets/img/icons/plus.svg";
import CloseIcon from "../../assets/img/icons/close.svg";
import ArrowWhiteIcon from "../../assets/img/icons/arrow-right-white.svg";
import "./cartPage.scss";

export function CartPage() {
  const { cart } = useCart();

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__wrapper">
          <h5>My Shopping Cart</h5>
          {cart.length > 0 ? (
            <div className="cart__content">
              <div className="cart__grid">
                <div className="cart__grid-header">
                  <p className="cart__grid-category">Product</p>
                  <p className="cart__grid-category">Price</p>
                  <p className="cart__grid-category">Quantity</p>
                  <p className="cart__grid-category">Subtotal</p>
                  <p className="cart__grid-category"></p>
                </div>
                <div className="cart__grid-products">
                  {cart.map((product) => (
                    <div key={product.id} className="cart__item">
                      <div className="cart__item-product">
                        <img src={product.image} />
                        <p>{product.name}</p>
                      </div>

                      <div className="cart__item-price">
                        {!product.discountPriceCents ? (
                          <p>{formatCurrency(product.priceCents)}</p>
                        ) : (
                          <p>
                            {formatCurrency(product.priceCents)}
                            <span>
                              {formatCurrency(product.discountPriceCents)}
                            </span>
                          </p>
                        )}
                      </div>

                      <div className="cart__item-quantity">
                        <button>
                          <img src={MinusIcon} />
                        </button>
                        <p>{product.quantity}</p>
                        <button>
                          <img src={PlusIcon} />
                        </button>
                      </div>

                      <div className="cart__item-subtotal">
                        {!product.discountPriceCents
                          ? formatCurrency(
                              product.priceCents * product.quantity,
                            )
                          : formatCurrency(
                              product.discountPriceCents * product.quantity,
                            )}
                      </div>

                      <button className="cart__item-remove">
                        <img src={CloseIcon} alt="remove" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart__grid-buttons">
                  <button className="button">Return to shop</button>
                  <button className="button">Update cart</button>
                </div>
              </div>
              <div className="cart__total">
                <p className="cart__total-header">Cart Total</p>
                <div className="cart__total-content">
                  <p>
                    Subtotal:
                    <span>$84.00</span>
                  </p>
                  <p>
                    Shipping:
                    <span>Free</span>
                  </p>
                  <p>
                    Total:
                    <span>$84.00</span>
                  </p>
                </div>
                <button className="button cart__total-button">
                  Proceed to checkout
                </button>
              </div>
              <div className="cart__coupon">
                <p className="cart__coupon-heading">Coupon Code</p>
                <div className="cart__coupon-form">
                  <input type="text" placeholder="Enter code" />
                  <button className="button">Apply Coupon</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__content--empty">
              <p>Your wishlist is empty. Start shopping to add favorites!</p>
              <Link to={"/shop"}>
                <button className="button">
                  Shop Now
                  <img src={ArrowWhiteIcon} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
