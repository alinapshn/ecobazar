import { useState, useEffect } from "react";
import MinusIcon from "../assets/img/icons/minus.svg";
import PlusIcon from "../assets/img/icons/plus.svg";
import "./quantityPicker.scss";

export function QuantityPicker({ quantity, onIncrease, onDecrease, onChange }) {
  const [inputValue, setInputValue] = useState(quantity);

  useEffect(() => {
    setInputValue(quantity);
  }, [quantity]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);

      const num = parseInt(value);
      if (num > 0) {
        onChange(num);
      }
    }
  };

  const handleBlur = () => {
    if (
      inputValue === "" ||
      parseInt(inputValue) === 0 ||
      isNaN(parseInt(inputValue))
    ) {
      setInputValue(1);
      onChange(1);
    }
  };

  return (
    <div className="quantity">
      <button onClick={onDecrease}>
        <img src={MinusIcon} />
      </button>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />

      <button onClick={onIncrease}>
        <img src={PlusIcon} />
      </button>
    </div>
  );
}
