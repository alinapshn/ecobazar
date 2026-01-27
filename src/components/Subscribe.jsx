import LogoIcon from "../assets/img/icons/logo.svg";
import "./subscribe.scss";

export function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <div className="subscribe__logo">
            <img src={LogoIcon} alt="Logo" />
            <h3>Ecobazar</h3>
          </div>
          <div className="subscribe__info">
            <p className="subscribe__info-title">Subcribe our Newsletter</p>
            <p className="subscribe__info-text">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>
          <div className="subscribe__form">
            <input
              className="subscribe__form-input"
              type="email"
              placeholder="Your email address"
            />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
