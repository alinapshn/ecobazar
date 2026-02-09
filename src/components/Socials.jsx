import FacebookIcon from "../assets/img/icons/facebook.svg";
import TwitterIcon from "../assets/img/icons/twitter.svg";
import PinterestIcon from "../assets/img/icons/pinterest.svg";
import InstagramIcon from "../assets/img/icons/instagram.svg";
import "./socials.scss";

export function Socials() {
  return (
    <div className="socials">
      <p>Share item: </p>
      <div className="socials__buttons">
        <button>
          <img src={FacebookIcon} />
        </button>
        <button>
          <img src={TwitterIcon} />
        </button>
        <button>
          <img src={PinterestIcon} />
        </button>
        <button>
          <img src={InstagramIcon} />
        </button>
      </div>
    </div>
  );
}
