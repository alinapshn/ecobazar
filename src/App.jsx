import { HomePage } from "./pages/home/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />

      <section className="banners">
        <div className="container">
          <div className="banners__wrapper">
            <div className="banners__block">
              <img
                src="./img/index/banners/milk.png"
                className="banners__block-img"
              />
              <div className="banners__block-info">
                <h5>100% Fresh Cow Milk</h5>
                <p className="banners__block-pg">
                  Starting at <span>$14.99</span>
                </p>
                <button className="banners__block-button">
                  Shop Now <img src="./img/icons/arrow-right-green.svg" />
                </button>
              </div>
            </div>
            <div className="banners__block">
              <img
                src="./img/index/banners/drink.png"
                className="banners__block-img"
              />
              <div className="banners__block-info">
                <p className="banners__block-pg">Drink Sale</p>
                <h5>Water & Soft Drink</h5>
                <button className="banners__block-button">
                  Shop Now <img src="./img/icons/arrow-right-green.svg" />
                </button>
              </div>
            </div>
            <div className="banners__block">
              <img
                src="./img/index/banners/breakfast.png"
                className="banners__block-img"
              />
              <div className="banners__block-info">
                <p className="banners__block-pg">100% Organic</p>
                <h5>Quick Breakfast</h5>
                <button className="banners__block-button">
                  Shop Now <img src="./img/icons/arrow-right-green.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
