import { NavLink } from "react-router";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/money";
import LogoIcon from "../assets/img/icons/logo.svg";
import SearchIcon from "../assets/img/icons/search.svg";
import FavoritesIcon from "../assets/img/icons/favorites.svg";
import CartIcon from "../assets/img/icons/cart.svg";
import ArrowDownIcon from "../assets/img/icons/arrow-down.svg";
import PhoneIcon from "../assets/img/icons/phone.svg";
import "./header.scss";

export function Header() {
  const { cart } = useCart();

  const cartCount = cart.length;

  const cartTotalCents = cart.reduce((total, item) => {
    const price = item.discountPriceCents || item.priceCents;
    return total + price * item.quantity;
  }, 0);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__wrapper container">
          <div className="header__top-location">
            <img src="./img/icons/map-pin.svg" alt="" />
            <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>

          <div className="header__user">
            <button className="header__user-lang">
              Eng <img src={ArrowDownIcon} />
            </button>
            <button className="header__user-currency">
              USD <img src={ArrowDownIcon} />
            </button>
            <div className="header__user-auth">
              <a href="#" className="header__link">
                Sign In /
              </a>
              <a href="#" className="header__link">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__middle">
        <div className="header__wrapper container">
          <NavLink to="/" className="header__middle-logo">
            <img src={LogoIcon} />
            <h5>Ecobazar</h5>
          </NavLink>

          <div className="header__search">
            <div className="header__search-input">
              <img src={SearchIcon} />
              <input type="text" placeholder="Search" />
            </div>
            <button className="header__search-button">Search</button>
          </div>

          <div className="header__middle-buttons">
            <NavLink to="/wishlist" className="header__middle-fav">
              <img src={FavoritesIcon} />
            </NavLink>

            <NavLink to="/cart" className="header__cart">
              <div className="header__cart-icon">
                <img src={CartIcon} />
                {cartCount > 0 && (
                  <div className="header__cart-quantity">{cartCount}</div>
                )}
              </div>

              <div className="header__cart-text">
                <p>Shopping cart:</p>
                <p>{formatCurrency(cartTotalCents)}</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__wrapper container">
          <div className="header__bottom-nav">
            <ul className="header__list">
              <li>
                <NavLink to="/" className="header__list-item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="header__list-item">
                  Shop
                </NavLink>
              </li>
              <li>
                <a href="" className="header__list-item">
                  Pages <img src={ArrowDownIcon} />
                </a>
              </li>
              <li>
                <NavLink to="/blog" className="header__list-item">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="header__list-item">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="header__list-item">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__bottom-phone">
            <img src={PhoneIcon} />
            <p>(219) 555-0114</p>
          </div>
        </div>
      </div>
    </header>
  );
}
