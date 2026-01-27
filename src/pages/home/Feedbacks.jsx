import QuoteIcon from "../../assets/img/icons/quote-icon.svg";
import Client1Icon from "../../assets/img/index/clients/client-1.png";
import Client2Icon from "../../assets/img/index/clients/client-2.png";
import Client3Icon from "../../assets/img/index/clients/client-3.png";
import "./feedbacks.scss";

export function Feedbacks() {
  return (
    <section className="feedbacks">
      <div className="container">
        <div className="feedbacks__wrapper">
          <h3 className="feedbacks__title">What our Clients Says</h3>
          <div className="feedbacks__list">
            <div className="feedbacks__item">
              <div className="feedbacks__item-text">
                <img src={QuoteIcon} alt="quote icon" />
                <p>
                  “Aenean et nisl eget eros consectetur vestibulum vel id erat.
                  Aliquam feugiat massa dui. Sed sagittis diam sit amet ante
                  sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”
                </p>
              </div>
              <div className="feedbacks__item-client">
                <img src={Client1Icon} />
                <div className="feedbacks__item-info">
                  <p>Jenny Wilson</p>
                  <span>Customer</span>
                </div>
              </div>
            </div>
            <div className="feedbacks__item">
              <div className="feedbacks__item-text">
                <img src={QuoteIcon} alt="quote icon" />
                <p>
                  “Proin sed neque nec tellus malesuada ultrices eget a justo.
                  Nullam a nibh faucibus, semper risus ac, ultricies est.
                  Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce
                  faucibus lacus felis”
                </p>
              </div>
              <div className="feedbacks__item-client">
                <img src={Client2Icon} />
                <div className="feedbacks__item-info">
                  <p>Guy Hawkins</p>
                  <span>Customer</span>
                </div>
              </div>
            </div>
            <div className="feedbacks__item">
              <div className="feedbacks__item-text">
                <img src={QuoteIcon} alt="quote icon" />
                <p>
                  “Nam sed odio diam. Mauris sagittis sapien sed convallis
                  cursus. Proin mattis ultrices urna ac eleifend. Cras vel nisi
                  nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem
                  pulvina”
                </p>
              </div>
              <div className="feedbacks__item-client">
                <img src={Client3Icon} />
                <div className="feedbacks__item-info">
                  <p>Kathryn Murphy</p>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
