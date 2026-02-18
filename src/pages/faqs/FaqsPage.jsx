import { useState } from "react";
import FarmerImage from "../../assets/img/faqs/farmer.png";
import PlusIcon from "../../assets/img/faqs/plus.svg";
import "./faqsPage.scss";

export function FaqsPage() {
  const list = [
    {
      id: 1,
      title: "In elementum est a ante sodales iaculis.",
      description:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 2,
      title: "Etiam lobortis massa eu nibh tempor elementum.",
      description:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 3,
      title: "In elementum est a ante sodales iaculis.",
      description:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 4,
      title: "Aenean quis quam nec lacus semper dignissim.",
      description:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 5,
      title: "Nulla tincidunt eros id tempus accumsan.",
      description:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="container">
        <div className="faqs__wrapper">
          <div className="faqs__content">
            <h2>Welcome, Let’s Talk About Our Ecobazar</h2>

            <div className="faqs__list">
              {list.map((item, index) => (
                <div
                  key={item.id}
                  className={`faqs__item ${activeIndex === index ? "active" : ""}`}
                >
                  <div className="faqs__item-header">
                    <p>{item.title}</p>

                    <button className="faqs__item-button" onClick={() => handleToggle(index)}>
                      <img src={PlusIcon} />
                    </button>
                  </div>

                  <div className="faqs__item-body">
                    <div className="faqs__item-inner">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img src={FarmerImage} />
        </div>
      </div>
    </section>
  );
}
