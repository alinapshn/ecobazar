import { ExtraVideoCard } from "./ExtraVideoCard";
import "./additionalTab.scss";

export function AdditionalTab({ product }) {
  const info = [
    { label: "Weight:", value: "03" },
    { label: "Color:", value: "Green" },
    { label: "Type:", value: "Organic" },
    { label: "Category:", value: product.category },
    {
      label: "Stock Status:",
      value: `${product.inStock ? "Available" : "Not Available"}`,
    },
    { label: "Tags:", value: product.tags.join(", ") },
  ];

  return (
    <div className="additional">
      <div className="additional__wrapper">
        <div className="additional__info">
          {info.map((spec, index) => (
            <div key={index} className="additional__info-item">
              <span className="additional__info-item--label">{spec.label}</span>
              <span className="additional__info-item--value">{spec.value}</span>
            </div>
          ))}
        </div>
        <div className="additional__add">
          <ExtraVideoCard />
        </div>
      </div>
    </div>
  );
}
