import News1Image from "../../assets/img/index/news/news-1.png";
import News2Image from "../../assets/img/index/news/news-2.png";
import News3Image from "../../assets/img/index/news/news-3.png";
import GreenArrowIcon from "../../assets/img/icons/arrow-right-green.svg";
import "./news.scss";

export function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__wrapper">
          <h3>Latest News</h3>
          <div className="news__list">
            <div className="news__item">
              <div className="news__item-img">
                <img src={News1Image} />
              </div>
              <div className="news__item-info">
                <div className="news__item-text">
                  <p className="news__item-title">
                    Curabitur porttitor orci eget neque accumsan venenatis.
                  </p>
                  <p className="news__item-descr">
                    Nulla libero lorem, euismod venenatis nibh sed, sodales
                    dictum ex. Etiam nisi augue, malesuada et pulvinar at,
                    posuere eu neque.
                  </p>
                </div>
                <button className="news__item-button">
                  Read More
                  <img
                    className="news__item-button--arrow"
                    src={GreenArrowIcon}
                  />
                </button>
              </div>
            </div>
            <div className="news__item">
              <div className="news__item-img">
                <img src={News2Image} />
              </div>
              <div className="news__item-info">
                <div className="news__item-text">
                  <p className="news__item-title">
                    Curabitur porttitor orci eget neque accumsan venenatis.
                  </p>
                  <p className="news__item-descr">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
                <button className="news__item-button">
                  Read More
                  <img
                    className="news__item-button--arrow"
                    src={GreenArrowIcon}
                  />
                </button>
              </div>
            </div>
            <div className="news__item">
              <div className="news__item-img">
                <img src={News3Image} />
              </div>
              <div className="news__item-info">
                <div className="news__item-text">
                  <p className="news__item-title">
                    Curabitur porttitor orci eget neque accumsan venenatis.
                  </p>
                  <p className="news__item-descr">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
                <button className="news__item-button">
                  Read More
                  <img
                    className="news__item-button--arrow"
                    src={GreenArrowIcon}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
