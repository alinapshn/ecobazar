import MapPinIcon from "../../assets/img/contact/icons/map-pin.svg";
import EmailIcon from "../../assets/img/contact/icons/email.svg";
import PhoneIcon from "../../assets/img/contact/icons/phone.svg";
import MapImage from "../../assets/img/contact/map.png";
import "./contactPage.scss";

export function ContactPage() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <div className="contact__info-block">
              <img src={MapPinIcon} />
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>

            <div className="contact__info-block">
              <img src={EmailIcon} />
              <p>Proxy@gmail.com Help.proxy@gmail.com</p>
            </div>

            <div className="contact__info-block">
              <img src={PhoneIcon} />
              <p>(219) 555-0114 (164) 333-0487</p>
            </div>
          </div>

          <form action="#" className="contact__form">
            <div className="contact__form-title">
              <p className="contact__form-heading">Just Say Hello!</p>
              <p className="contact__form-subheading">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
            </div>

            <div className="contact__form-inputs">
              <input type="text" placeholder="Your name" />

              <input type="email" placeholder="Your Email" />

              <input type="text" placeholder="Subject" />

              <textarea placeholder="Say something..." />
            </div>

            <button className="button">Send Message</button>
          </form>
        </div>
      </div>

      <img src={MapImage} />
    </section>
  );
}
