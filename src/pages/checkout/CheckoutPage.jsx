import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/money";
import "./checkoutPage.scss";

export function CheckoutPage() {
  const { cart } = useCart();

  const subtotalCents = cart.reduce((total, item) => {
    const currentPrice = item.discountPriceCents || item.priceCents;
    return total + currentPrice * item.quantity;
  }, 0);

  const shippingCents = 0;

  const totalCents = subtotalCents + shippingCents;

  return (
    <section className="checkout">
      <div className="container">
        <div className="checkout__wrapper">
          <div className="checkout__information">
            <div className="checkout__billing">
              <p className="checkout__title">Billing Information</p>

              <div className="checkout__billing-wrapper">
                <div className="checkout__billing-block">
                  <div className="checkout__billing-input">
                    <p>First name</p>
                    <input type="text" placeholder="Your first name" />
                  </div>
                  <div className="checkout__billing-input">
                    <p>Last name</p>
                    <input type="text" placeholder="Your last name" />
                  </div>
                  <div className="checkout__billing-input">
                    <p>
                      Company Name <span>(optional)</span>
                    </p>
                    <input type="text" placeholder="Company name" />
                  </div>
                </div>

                <div className="checkout__billing-input">
                  <p>Street Address</p>
                  <input type="text" placeholder="Your street address" />
                </div>

                <div className="checkout__billing-block">
                  <div className="checkout__billing-input">
                    <p>Country / Region</p>
                    <input type="text" placeholder="Select" />
                  </div>
                  <div className="checkout__billing-input">
                    <p>States</p>
                    <input type="text" placeholder="Selects" />
                  </div>
                  <div className="checkout__billing-input">
                    <p>Zip Code</p>
                    <input type="text" placeholder="Zip Code" />
                  </div>
                </div>

                <div className="checkout__billing-block">
                  <div className="checkout__billing-input">
                    <p>Email</p>
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="checkout__billing-input">
                    <p>Phone</p>
                    <input type="text" placeholder=" Phone number" />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout__additional">
              <p className="checkout__title">Additional Info</p>
              <div className="checkout__billing-input">
                <p>
                  Order Notes <span>(optional)</span>
                </p>
                <textarea placeholder="Notes about your order, e.g. special notes for delivery" />
              </div>
            </div>
          </div>
          <div className="checkout__summary">
            <div className="checkout__summary-info">
              <p className="checkout__summary-title">Order Summary</p>
              <div className="checkout__summary-products">
                {cart.map((item) => (
                  <div key={item.id} className="checkout__item">
                    <div className="checkout__item-title">
                      <img src={item.image} />
                      <p>{item.name}</p>
                      <span>x{item.quantity}</span>
                    </div>

                    <p className="checkout__item-price">
                      {!item.discountPriceCents
                        ? formatCurrency(item.priceCents * item.quantity)
                        : formatCurrency(
                            item.discountPriceCents * item.quantity,
                          )}
                    </p>
                  </div>
                ))}

                <div className="checkout__summary-total">
                  <p>
                    Subtotal: <span>{formatCurrency(subtotalCents)}</span>
                  </p>
                  <p>
                    Shipping: <span>Free</span>
                  </p>
                  <p>
                    Total: <span>{formatCurrency(totalCents)}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="checkout__summary-payment"></div>

            <button className="button">Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
}
