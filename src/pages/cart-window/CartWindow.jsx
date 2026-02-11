import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/money";
import CloseSquareIcon from "../../assets/img/icons/close-square.svg";
import CloseCircleIcon from "../../assets/img/icons/close-circle.svg";
import "./cartWindow.scss";

export function CartWindow({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const location = useLocation();

  const currentPath = useRef(location.pathname);

  useEffect(() => {
    if (currentPath.current !== location.pathname) {
      onClose();
    }
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      currentPath.current = location.pathname;
    }
  }, [isOpen, location.pathname]);

  const totalCents = cart.reduce((total, item) => {
    const price = item.discountPriceCents || item.priceCents;
    return total + price * item.quantity;
  }, 0);

  return (
    <div
      className={`cart-window__overlay ${isOpen ? "cart-window__overlay--active" : ""}`}
      onClick={onClose}
    >
      <section
        className={`cart-window ${isOpen ? "cart-window--active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-window__wrapper">
          <div className="cart-window__header">
            <p>Shopping Card ({cart.length})</p>
            <button onClick={onClose}>
              <img src={CloseSquareIcon} />
            </button>
          </div>

          <div className="cart-window__products">
            {cart.map((item) => (
              <div key={item.id} className="cart-window__item">
                <img className="cart-window__item-image" src={item.image} />

                <div className="cart-window__item-info">
                  <p className="cart-window__item-name">{item.name}</p>

                  <p className="cart-window__item-quantity">
                    {item.quantity} kg x{" "}
                    <span>
                      {formatCurrency(
                        item.discountPriceCents || item.priceCents,
                      )}
                    </span>
                  </p>
                </div>

                <button
                  className="cart-window__item-close"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  <img src={CloseCircleIcon} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-window__footer">
            <div className="cart-window__footer-info">
              <p>{cart.length} Product</p>
              <span>{formatCurrency(totalCents)}</span>
            </div>

            <div className="cart-window__footer-buttons">
              <Link to="/checkout" className="button" onClick={onClose}>
                Checkout
              </Link>
              <Link to="/cart" className="button" onClick={onClose}>
                Go To Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
