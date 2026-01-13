import VegetablesImage from "../../assets/img/index/props/vegetables.png";
import ArrowWhiteRightIcon from "../../assets/img/icons/arrow-right-white.svg";
import ShippingIcon from "../../assets/img/icons/shipping.svg";
import SupportIcon from "../../assets/img/icons/support.svg";
import PaymentIcon from "../../assets/img/icons/payment.svg";
import GuaranteeIcon from "../../assets/img/icons/guarantee.svg";
import "./props.scss";

export function Props() {
  return (
    <section className="props">
      <div className="container">
        <div className="props__wrapper">
          <div className="props__img">
            <img src={VegetablesImage} className="props__img" />
            <div className="props__sale">
              <h5 className="props__sale-title">70%</h5>
              <p className="props__sale-subtitle">off</p>
            </div>
          </div>

          <div className="props__info">
            <p className="cursive props__info-subtitle">Welcome to shopery</p>
            <h1 className="props__info-title">Fresh & Healthy Organic Food</h1>
            <p className="props__info-subtext">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <button className="props__info-button">
              Shop now
              <img src={ArrowWhiteRightIcon} />
            </button>
          </div>
        </div>

        <div className="props__banner">
          <div className="props__block">
            <div className="props__block-icon">
              <img src={ShippingIcon} />
            </div>
            <div className="props__block-text">
              <p className="props__block-title">Free Shipping</p>
              <p className="props__block-info">Free shipping with discount</p>
            </div>
          </div>
          <div className="props__block">
            <div className="props__block-icon">
              <img src={SupportIcon} />
            </div>
            <div className="props__block-text">
              <p className="props__block-title">Great Support 24/7</p>
              <p className="props__block-info">Instant access to Contact</p>
            </div>
          </div>
          <div className="props__block">
            <div className="props__block-icon">
              <img src={PaymentIcon} />
            </div>
            <div className="props__block-text">
              <p className="props__block-title">100% Sucure Payment</p>
              <p className="props__block-info">We ensure your money is save</p>
            </div>
          </div>
          <div className="props__block">
            <div className="props__block-icon">
              <img src={GuaranteeIcon} />
            </div>
            <div className="props__block-text">
              <p className="props__block-title">Money-Back Guarantee</p>
              <p className="props__block-info">30 days money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
