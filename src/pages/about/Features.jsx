import FarmerImage from "../../assets/img/about/features.png";
import LeafIcon from "../../assets/img/about/icons/leaf.svg";
import StarIcon from "../../assets/img/about/icons/star.svg";
import TruckIcon from "../../assets/img/about/icons/delivery-truck.svg";
import HeadphonesIcon from "../../assets/img/about/icons/headphones.svg";
import BagIcon from "../../assets/img/about/icons/shopping-bag.svg";
import PackageIcon from "../../assets/img/about/icons/package.svg";
import "./features.scss";

export function Features() {
  const listItem = [
    {
      id: 1,
      image: LeafIcon,
      title: "100% Organic food",
      description: "100% healthy & Fresh food.",
    },
    {
      id: 2,
      image: StarIcon,
      title: "Customer Feedback",
      description: "Our happy customer",
    },
    {
      id: 3,
      image: TruckIcon,
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      id: 4,
      image: HeadphonesIcon,
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      id: 5,
      image: BagIcon,
      title: "100% Sucure Payment",
      description: "We ensure your money is save",
    },
    {
      id: 6,
      image: PackageIcon,
      title: "100% Organic food",
      description: "100% healthy & Fresh food.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__wrapper">
          <div className="features__image">
            <img src={FarmerImage} alt="Farmer" />
          </div>

          <div className="features__content">
            <div className="features__title">
              <h1>100% Trusted Organic Food Store</h1>
              <p>
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.
              </p>
            </div>

            <div className="features__list">
              {listItem.map((item) => (
                <div key={item.id} className="features__item">
                  <div className="features__item-image">
                    <img src={item.image} />
                  </div>
                  <div className="features__item-text">
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
