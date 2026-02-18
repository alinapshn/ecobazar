import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Socials } from "./Socials";
import InstaIcon1 from "../assets/img/footer/insta-1.jpg";
import InstaIcon2 from "../assets/img/footer/insta-2.jpg";
import InstaIcon3 from "../assets/img/footer/insta-3.jpg";
import InstaIcon4 from "../assets/img/footer/insta-4.jpg";
import InstaIcon5 from "../assets/img/footer/insta-5.jpg";
import InstaIcon6 from "../assets/img/footer/insta-6.jpg";
import InstaIcon7 from "../assets/img/footer/insta-7.jpg";
import InstaIcon8 from "../assets/img/footer/insta-8.jpg";
import PaymentIcon1 from "../assets/img/footer/icons/apple-pay.svg";
import PaymentIcon2 from "../assets/img/footer/icons/visa-logo.svg";
import PaymentIcon3 from "../assets/img/footer/icons/discover.svg";
import PaymentIcon4 from "../assets/img/footer/icons/mastercard.svg";
import PaymentIcon5 from "../assets/img/footer/icons/secure-payment.svg";
import "./footer.scss";

export function Footer() {
  const instaList = [
    {
      id: 1,
      image: InstaIcon1,
    },
    {
      id: 2,
      image: InstaIcon2,
    },
    {
      id: 3,
      image: InstaIcon3,
    },
    {
      id: 4,
      image: InstaIcon4,
    },
    {
      id: 5,
      image: InstaIcon5,
    },
    {
      id: 6,
      image: InstaIcon6,
    },
    {
      id: 7,
      image: InstaIcon7,
    },
    {
      id: 8,
      image: InstaIcon8,
    },
  ];

  const paymentList = [
    {
      id: 1,
      image: PaymentIcon1,
    },
    {
      id: 2,
      image: PaymentIcon2,
    },
    {
      id: 3,
      image: PaymentIcon3,
    },
    {
      id: 4,
      image: PaymentIcon4,
    },
    {
      id: 5,
      image: PaymentIcon5,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-about">
            <p className="footer__top-heading">About Shopery</p>
            <p className="footer__top-text">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="footer__top-contacts">
              <p>(219) 555-0114</p>
              <span>or</span>
              <p>Proxy@gmail.com</p>
            </div>
          </div>

          <div className="footer__top-links">
            <p className="footer__top-heading">My Account</p>

            <ul className="footer__top-list">
              <li>
                <NavLink to="/account" className="footer__top-item">
                  My Account
                </NavLink>
              </li>

              <li>
                <NavLink to="/order-history" className="footer__top-item">
                  Order History
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" className="footer__top-item">
                  Shoping Cart
                </NavLink>
              </li>

              <li>
                <NavLink to="/wishlist" className="footer__top-item">
                  Wishlist
                </NavLink>
              </li>

              <li>
                <NavLink to="/settings" className="footer__top-item">
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__top-links">
            <p className="footer__top-heading">Helps</p>

            <ul className="footer__top-list">
              <li>
                <NavLink to="/contact" className="footer__top-item">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/faqs" className="footer__top-item">
                  Faqs
                </NavLink>
              </li>

              <li>
                <NavLink to="/terms-and-condition" className="footer__top-item">
                  Terms & Condition
                </NavLink>
              </li>

              <li>
                <NavLink to="/privacy-policy" className="footer__top-item">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__top-links">
            <p className="footer__top-heading">Proxy</p>

            <ul className="footer__top-list">
              <li>
                <NavLink to="/about" className="footer__top-item">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" className="footer__top-item">
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink to="/track-order" className="footer__top-item">
                  Track Order
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__top-insta">
            <p className="footer__top-heading">Instagram</p>

            <div className="footer__top-grid">
              {instaList.map((item) => (
                <img key={item.id} src={item.image} />
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <Socials withTitle={false} variant="light" />

          <p className="footer__bottom-text">
            Shopery eCommerce © 2021. All Rights Reserved
          </p>

          <div className="footer__bottom-payments">
            {paymentList.map((item) => (
              <div key={item.id} className="footer__bottom-item">
                <img src={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
