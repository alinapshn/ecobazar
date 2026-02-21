import FilterIcon from "../assets/img/icons/filter.svg";
import "./filtersHeader.scss";

export function FiltersHeader({ count, isDirty, onApply, onReset, isFiltered }) {
  return (
    <div className="filters-header">
      <div className="filters-header__left">
        <button onClick={onApply} className="filters-header__left-button button">
          {isDirty ? "Apply Changes" : "Filter"}
          <img src={FilterIcon} />
        </button>

        {isFiltered && (
          <button onClick={onReset} className="filters-header__left-button--reset">
            Reset
          </button>
        )}
      </div>
      <p className="filters-header__right">
        <span>{count}</span> Results Found
      </p>
    </div>
  );
}
