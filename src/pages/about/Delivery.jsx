import { Link } from "react-router-dom";
import DeliveryImage from "../../assets/img/about/delivery.png";
import CheckMarkIcon from "../../assets/img/about/icons/check-mark.svg";
import ArrowWhiteRightIcon from "../../assets/img/icons/arrow-right-white.svg";
import "./delivery.scss";

export function Delivery() {
  return (
    <section className="delivery">
      <div className="container">
        <div className="delivery__wrapper">
          <div className="delivery__content">
            <h2>We Delivered, You Enjoy Your Order.</h2>

            <p className="delivery__content-info">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>

            <div className="delivery__content-list">
              <div className="delivery__item">
                <div className="delivery__item-check">
                  <img src={CheckMarkIcon} />
                </div>
                <p>Sed in metus pellentesque.</p>
              </div>

              <div className="delivery__item">
                <div className="delivery__item-check">
                  <img src={CheckMarkIcon} />
                </div>
                <p>
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </p>
              </div>

              <div className="delivery__item">
                <div className="delivery__item-check">
                  <img src={CheckMarkIcon} />
                </div>
                <p>Maecenas ut nunc fringilla erat varius.</p>
              </div>
            </div>

            <Link to="/shop">
              <button className="button delivery__content-button">
                Shop Now
                <img
                  className="delivery__content-button--arrow"
                  src={ArrowWhiteRightIcon}
                />
              </button>
            </Link>
          </div>

          <div className="delivery__image">
            <img src={DeliveryImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
