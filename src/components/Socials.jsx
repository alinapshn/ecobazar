import FacebookIcon from "../assets/img/icons/facebook.svg?react";
import TwitterIcon from "../assets/img/icons/twitter.svg?react";
import PinterestIcon from "../assets/img/icons/pinterest.svg?react";
import InstagramIcon from "../assets/img/icons/instagram.svg?react";
import "./socials.scss";

export function Socials({ withTitle = true, variant = "default" }) {
  return (
    <div className="socials">
      {withTitle && <p className="socials__title">Share item:</p>}

      <div className="socials__buttons">
        <button className="socials__buttons-button">
          <FacebookIcon className={`socials__buttons-button--${variant}`} />
        </button>

        <button className="socials__buttons-button">
          <TwitterIcon className={`socials__buttons-button--${variant}`} />
        </button>

        <button className="socials__buttons-button">
          <PinterestIcon className={`socials__buttons-button--${variant}`} />
        </button>

        <button className="socials__buttons-button">
          <InstagramIcon className={`socials__buttons-button--${variant}`} />
        </button>
      </div>
    </div>
  );
}
