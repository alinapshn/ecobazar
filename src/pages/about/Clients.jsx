import ClientImage1 from "../../assets/img/about/client-1.png";
import ClientImage2 from "../../assets/img/about/client-2.png";
import ClientImage3 from "../../assets/img/about/client-3.png";
import RatingIcon from "../../assets/img/about/icons/rating.svg";
import QuotesIcon from "../../assets/img/about/icons/quotes.svg";
import "./clients.scss";

export function Clients() {
  const clients = [
    {
      id: 1,
      feedback:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque egets",
      name: "Robert Fox",
      job: "Customer",
      image: ClientImage1,
      rating: RatingIcon,
    },
    {
      id: 2,
      feedback:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque egets",
      name: "Dianne Russell",
      job: "Customer",
      image: ClientImage2,
      rating: RatingIcon,
    },
    {
      id: 3,
      feedback:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque egets",
      name: "Eleanor Pena",
      job: "Customer",
      image: ClientImage3,
      rating: RatingIcon,
    },
  ];

  return (
    <section className="clients">
      <div className="container">
        <div className="clients__wrapper">
          <div className="clients__header">
            <h2>Client Testimonail</h2>
          </div>

          <div className="clients__list">
            {clients.map((client) => (
              <div key={client.id} className="clients__item">
                <img className="clients__item-quotes" src={QuotesIcon} />

                <p className="clients__item-text">{client.feedback}</p>

                <div className="clients__item-info">
                  <div className="clients__item-customer">
                    <img src={client.image} />

                    <div className="clients__item-name">
                      <p>{client.name}</p>
                      <span>{client.job}</span>
                    </div>
                  </div>

                  <img src={client.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
