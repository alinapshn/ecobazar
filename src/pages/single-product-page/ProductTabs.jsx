import { useState } from "react";
import { DescriptionTab } from "./tabs/DescriptionTab";
import { AdditionalTab } from "./tabs/AdditionalTab";
import { FeedbacksTab } from "./tabs/FeedbacksTab";
import "./productTabs.scss";

export function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("descriptions");
  const renderContent = () => {
    switch (activeTab) {
      case "descriptions":
        return <DescriptionTab />;
      case "additional":
        return <AdditionalTab product={product} />;
      case "feedbacks":
        return <FeedbacksTab />;
      default:
        return null;
    }
  };

  return (
    <section className="product-tabs">
      <div className="container">
        <div className="product-tabs__header">
          <button
            className={`product-tabs__header-button ${activeTab === "descriptions" ? "product-tabs__header-button--active" : ""}`}
            onClick={() => setActiveTab("descriptions")}
          >
            Descriptions
          </button>
          <button
            className={`product-tabs__header-button ${activeTab === "additional" ? "product-tabs__header-button--active" : ""}`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`product-tabs__header-button ${activeTab === "feedbacks" ? "product-tabs__header-button--active" : ""}`}
            onClick={() => setActiveTab("feedbacks")}
          >
            Customer Feedback
          </button>
        </div>
        <div className="product-tabs__content">{renderContent()}</div>
      </div>
    </section>
  );
}
