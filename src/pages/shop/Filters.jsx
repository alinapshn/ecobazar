import { formatCurrency } from "../../utils/money";
import { Accordion } from "./Accordion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./filters.scss";

export function Filters({
  categories,
  tempFilters,
  setTempFilters,
  minPrice,
  maxPrice,
}) {
  const handlePriceChange = (value) => {
    setTempFilters({ ...tempFilters, priceRange: value });
  };

  return (
    <div className="filters">
      <Accordion title="All Categories">
        <div className="filters__list">
          {categories.map((category) => (
            <div key={category.name} className="filters__item">
              <input
                type="radio"
                id={`category-${category.name}`}
                name="category"
                value={category.name}
                checked={tempFilters.category === category.name}
                onChange={() =>
                  setTempFilters({ ...tempFilters, category: category.name })
                }
                className="filters__item-input"
              />

              <label
                htmlFor={`category-${category.name}`}
                className="filters__item-label"
              >
                <p className="filters__item-name">
                  {category.name}{" "}
                  <span className="filters__item-count">
                    ({category.count})
                  </span>
                </p>
              </label>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="Price">
        <div className="filters__price">
          <Slider
            range
            min={minPrice} 
            max={maxPrice} 
            value={tempFilters.priceRange}
            onChange={handlePriceChange}
            step={100}
          />

          <div className="filters__price-values">
            Price:{" "}
            <span>
              {formatCurrency(tempFilters.priceRange[0])} —{" "}
              {formatCurrency(tempFilters.priceRange[1])}
            </span>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
