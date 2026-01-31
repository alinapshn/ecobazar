import VideoImage from "../../../assets/img/single-product-page/video.jpg";
import PriceTagIcon from "../../../assets/img/single-product-page/icons/price-tag.svg";
import LeafIcon from "../../../assets/img/single-product-page/icons/leaf.svg";
import TriangleIcon from "../../../assets/img/single-product-page/icons/triangle.svg";
import "./extraVideoCard.scss";

export function ExtraVideoCard() {
  return (
    <div className="extra-video-card">
      <div className="extra-video-card__video">
        <img src={VideoImage} />
        <button className="extra-video-card__video-button">
          <img src={TriangleIcon} />
        </button>
      </div>
      <div className="extra-video-card__block">
        <div className="extra-video-card__block-item">
          <img src={PriceTagIcon} />
          <div>
            <p>64% Discount</p>
            <span>Save your 64% money with us</span>
          </div>
        </div>
        <div className="extra-video-card__block-item">
          <img src={LeafIcon} />
          <div>
            <p>100% Organic</p>
            <span>100% Organic Vegetables</span>
          </div>
        </div>
      </div>
    </div>
  );
}
