// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { HomePage } from "./assets/pages/home/HomePage";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />

      <section className="intro-prod">
        <div className="container">
          <div className="intro-prod__wrapper">
            <div className="intro-prod__header">
              <h3>Introducing Our Products</h3>
              <ul className="intro-prod__list">
                <li className="intro-prod__list-item">All</li>
                <li className="intro-prod__list-item">Vegetable</li>
                <li className="intro-prod__list-item">Fruit</li>
                <li className="intro-prod__list-item">Meat & Fish</li>
                <li className="intro-prod__list-item">View All</li>
              </ul>
            </div>

            <div className="intro-prod__products">
              <div className="intro-prod__product">
                <p className="intro-prod__product-sale">
                  Sale <span>50%</span>
                </p>
                <img src="./img/products/greean-apple.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Green Apple</p>
                    <p className="intro-prod__product-price">
                      $14.99 <span>$20.99</span>
                    </p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/mango.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Surjapur Mango</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/tomatos.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Red Tomatos</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/cauliflower.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">
                      Fresh Cauliflower
                    </p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/lettuce.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Green Lettuce</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/green-pepper.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Green Pepper</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/green-chilli.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Green Chilli</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
              <div className="intro-prod__product">
                <img src="./img/products/eggplant.png" />
                <div className="intro-prod__product-info">
                  <div className="intro-prod__product-text">
                    <p className="intro-prod__product-name">Eggplant</p>
                    <p className="intro-prod__product-price">$14.99</p>
                    <img
                      className="intro-prod__product-rating"
                      src="./img/icons/rating.svg"
                    />
                  </div>
                  <button className="intro-prod__product-cart">
                    <img src="./img/icons/cart.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
