import FilterIcon from "../../assets/img/icons/filter.svg";
import "./shopHeader.scss";

export function ShopHeader({ count, isDirty, onApply, onReset, isFiltered }) {
  return (
    <div className="shop-header">
      <div className="shop-header__left">
        <button onClick={onApply} className="shop-header__left-button button">
          {isDirty ? "Apply Changes" : "Filter"}
          <img src={FilterIcon} />
        </button>

        {isFiltered && (
          <button onClick={onReset} className="shop-header__left-button--reset">
            Reset
          </button>
        )}
      </div>
      <p className="shop-header__right">
        <span>{count}</span> Results Found
      </p>
    </div>
  );
}
