import { reviews } from "../../../../data/review";
import "./feedbacksTab.scss";

export function FeedbacksTab() {
  return (
    <div className="feedbacks-tab">
      <div className="feedbacks-tab__list">
        {reviews.map((review) => (
          <div key={review.id} className="feedbacks-tab__item">
            <div className="feedbacks-tab__item-header">
              <img
                src={review.avatar}
                alt={review.author}
                className="feedbacks-tab__item-avatar"
              />
              <div className="feedbacks-tab__item-info">
                <div className="feedbacks-tab__item-meta">
                  <span className="feedbacks-tab__item-author">
                    {review.author}
                  </span>
                  <img
                    src={review.rating}
                    className="feedbacks-tab__item-rating"
                  />
                </div>
                <span className="feedbacks-tab__item-date">{review.date}</span>
              </div>
            </div>
            <p className="feedbacks-tab__item-text">{review.text}</p>
          </div>
        ))}
      </div>
      <button className="feedbacks-tab__button">Load More</button>
    </div>
  );
}
