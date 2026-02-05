import { useState } from "react";
import ArrowDownIcon from "../../assets/img/icons/arrow-down-black.svg";
import "./accordion.scss";

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`accordion ${isOpen ? "is-open" : ""}`}>
      <div className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
        <h5>{title}</h5>
        <img src={ArrowDownIcon} alt="arrow" className="accordion__header-arrow" />
      </div>
      <div className="accordion__content">
        <div className="accordion__inner">{children}</div>
      </div>
    </div>
  );
}
