import FarmerImage from "../../assets/img/about/about-story.png";
import "./aboutStory.scss";

export function AboutStory() {
  return (
    <section className="about-story">
      <div className="container">
        <div className="about-story__wrapper">
          <div className="about-story__info">
            <h1>100% Trusted Organic Food Store</h1>
            <p>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <img src={FarmerImage} className="about-story__photo" />
        </div>
      </div>
    </section>
  );
}
