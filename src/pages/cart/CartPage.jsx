import { formatCurrency } from "../../utils/money";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { QuantityPicker } from "../../components/QuantityPicker";
import CloseIcon from "../../assets/img/icons/close-circle.svg";
import ArrowWhiteIcon from "../../assets/img/icons/arrow-right-white.svg";
import "./cartPage.scss";

export function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const subtotalCents = cart.reduce((total, item) => {
    const currentPrice = item.discountPriceCents || item.priceCents;
    return total + currentPrice * item.quantity;
  }, 0);

  const shippingCents = 0;

  const totalCents = subtotalCents + shippingCents;

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

                      <QuantityPicker
                        quantity={product.quantity}
                        onIncrease={() => increaseQuantity(product)}
                        onDecrease={() => decreaseQuantity(product)}
                        onChange={(val) => updateQuantity(product, val)}
                      />

                      <div className="cart__item-subtotal">
                        {!product.discountPriceCents
                          ? formatCurrency(
                              product.priceCents * product.quantity,
                            )
                          : formatCurrency(
                              product.discountPriceCents * product.quantity,
                            )}
                      </div>

                      <button
                        className="cart__item-remove"
                        onClick={() => {
                          removeFromCart(product);
                        }}
                      >
                        <img src={CloseIcon} alt="remove" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart__grid-buttons">
                  <Link to={"/shop"}>
                    <button className="button button--grey">Return to shop</button>
                  </Link>

                  <button className="button button--grey">Update cart</button>
                </div>
              </div>
              <div className="cart__total">
                <p className="cart__total-header">Cart Total</p>
                <div className="cart__total-content">
                  <p>
                    Subtotal:
                    <span>{formatCurrency(subtotalCents)}</span>
                  </p>
                  <p>
                    Shipping:
                    <span>Free</span>
                  </p>
                  <p>
                    Total:
                    <span>{formatCurrency(totalCents)}</span>
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
                  <button className="button button--black">Apply Coupon</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__content--empty">
              <p>
                Your cart is waiting for its first purchase. Explore our fresh
                catalog.
              </p>
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
