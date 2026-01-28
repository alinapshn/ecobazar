import Insta1Icon from "../assets/img/footer/insta-1.jpg";
import Insta2Icon from "../assets/img/footer/insta-2.jpg";
import Insta3Icon from "../assets/img/footer/insta-3.jpg";
import Insta4Icon from "../assets/img/footer/insta-4.jpg";
import Insta5Icon from "../assets/img/footer/insta-5.jpg";
import Insta6Icon from "../assets/img/footer/insta-6.jpg";
import Insta7Icon from "../assets/img/footer/insta-7.jpg";
import Insta8Icon from "../assets/img/footer/insta-8.jpg";
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__wrapper container">
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
              <li className="footer__top-item">My Account</li>
              <li className="footer__top-item">Order History</li>
              <li className="footer__top-item">Shoping Cart</li>
              <li className="footer__top-item">Wishlist</li>
              <li className="footer__top-item">Settings</li>
            </ul>
          </div>
          <div className="footer__top-links">
            <p className="footer__top-heading">Helps</p>
            <ul className="footer__top-list">
              <li className="footer__top-item">Contact</li>
              <li className="footer__top-item">Faqs</li>
              <li className="footer__top-item">Terms & Condition</li>
              <li className="footer__top-item">Privacy Policy</li>
            </ul>
          </div>
          <div className="footer__top-links">
            <p className="footer__top-heading">Proxy</p>
            <ul className="footer__top-list">
              <li className="footer__top-item">About</li>
              <li className="footer__top-item">Shop</li>
              <li className="footer__top-item">Product</li>
              <li className="footer__top-item">Products Details</li>
              <li className="footer__top-item">Track Order</li>
            </ul>
          </div>
          <div className="footer__top-insta">
            <p className="footer__top-heading">Instagram</p>
            <div className="footer__top-grid">
               <img src={Insta1Icon} alt="Insta" />
               <img src={Insta2Icon} alt="Insta" />
               <img src={Insta3Icon} alt="Insta" />
               <img src={Insta4Icon} alt="Insta" />
               <img src={Insta5Icon} alt="Insta" />
               <img src={Insta6Icon} alt="Insta" />
               <img src={Insta7Icon} alt="Insta" />
               <img src={Insta8Icon} alt="Insta" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container"></div>
      </div>
    </footer>
  );
}
