import { NavLink } from "react-router";
import LogoIcon from "../assets/img/icons/logo.svg";
import SearchIcon from "../assets/img/icons/search.svg";
import FavoritesIcon from "../assets/img/icons/favorites.svg";
import CartIcon from "../assets/img/icons/cart.svg";
import "./header.scss";

export function Header() {
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
              Eng <img src="./img/icons/arrow-down.svg" />
            </button>
            <button className="header__user-currency">
              USD <img src="./img/icons/arrow-down.svg" />
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
            <NavLink to="/favorites" className="header__middle-fav">
              <img src={FavoritesIcon} />
            </NavLink>

            <NavLink to="/cart" className="header__cart">
              <div className="header__cart-icon">
                <img src={CartIcon} />
                <div className="header__cart-quantity">2</div>
              </div>

              <div className="header__cart-text">
                <p>Shopping cart:</p>
                <p>$57.00</p>
              </div>
            </NavLink>
          </div>

        </div>
      </div>

      <div className="header__bottom">
        <div className="header__wrapper container">
          <div className="header__bottom-nav">
            <button className="header__bottom-menu">
              <img src="./img/icons/menu.svg" />
              <p>All Categories</p>
              <img src="./img/icons/arrow-down.svg" />
            </button>

            <ul className="header__list">
              <li>
                <a href="" className="header__list-item">
                  Home <img src="./img/icons/arrow-down.svg" />
                </a>
              </li>
              <li>
                <a href="" className="header__list-item">
                  Shop <img src="./img/icons/arrow-down.svg" />
                </a>
              </li>
              <li>
                <a href="" className="header__list-item">
                  Pages <img src="./img/icons/arrow-down.svg" />
                </a>
              </li>
              <li>
                <a href="" className="header__list-item">
                  Blog <img src="./img/icons/arrow-down.svg" />
                </a>
              </li>
              <li>
                <a href="" className="header__list-item">
                  About Us{" "}
                </a>
              </li>
              <li>
                <a href="" className="header__list-item">
                  Contact Us{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="header__bottom-phone">
            <img src="./img/icons/phone.svg" />
            <p>(219) 555-0114</p>
          </div>
        </div>
      </div>
    </header>
  );
}
