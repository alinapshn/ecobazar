import { Accordion } from "./Accordion";
import "./filters.scss";

export function Filters({ categories, tempFilters, setTempFilters }) {
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
        <div className="filters__price-info">
          Price:{" "}
          <span>
            {Math.round(tempFilters.priceRange[0] / 100)} —{" "}
            {Math.round(tempFilters.priceRange[1] / 100)}
          </span>
        </div>
      </Accordion>
    </div>
  );
}
