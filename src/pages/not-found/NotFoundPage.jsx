import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/img/not-found-page/error-404.png";
import "./notFoundPage.scss";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__wrapper">
          <img src={NotFoundImage} />

          <div className="not-found__info">
            <h3>Oops! page not found</h3>

            <p>
              Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
              Maecenas sagittis tortor at metus mollis
            </p>

            <Link to="/">
              <button className="button">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
