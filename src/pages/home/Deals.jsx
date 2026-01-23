import vegetablesImg from "../../assets/img/index/deals/deals-1.png";
import farmerImg from "../../assets/img/index/deals/deals-2.png";
import "./deals.scss";

export function Deals() {
  return (
    <section className="deals">
      <img className="deals__img-left" src={vegetablesImg} />
      <img className="deals__img-right" src={farmerImg} />
      <div className="container">
        <div className="deals__wrapper">
          <div className="deals__text">
            <p className="deals__text-pretitle">BEST DEALS</p>
            <h3 className="deals__text-title">
              Our Special Products Deal of the Month
            </h3>
          </div>
          <div className="deals__time">
            <div className="deals__time-item">
              <h5>00</h5>
              <span>Days</span>
            </div>
            <div className="deals__time-item">
              <h5>02</h5>
              <span>Hours</span>
            </div>
            <div className="deals__time-item">
              <h5>18</h5>
              <span>Minutes</span>
            </div>
            <div className="deals__time-item">
              <h5>46</h5>
              <span>Seconds</span>
            </div>
          </div>
          <button className="button">Shop now</button>
        </div>
      </div>
    </section>
  );
}
