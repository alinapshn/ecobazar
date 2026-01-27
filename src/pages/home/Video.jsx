import VideoImg from "../../assets/img/index/video.png";
import "./video.scss";

export function Video() {
  return (
    <section className="video">
      <div className="container">
        <div className="video__wrapper">
          <img className="video__img" src={VideoImg} />
          <div className="video__info">
            <div className="video__info-title">
              <p className="cursive">Video</p>
              <h4>We’re the Best Organic Farm in the World</h4>
            </div>
            <button className="video__info-button"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
