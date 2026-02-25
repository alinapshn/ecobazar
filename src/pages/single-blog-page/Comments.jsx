import "./comments.scss";

export function Comments({ comments = [] }) {
  return (
    <section className="comments">
      <div className="comments__wrapper">
        <div className="comments__form">
          <p className="comments__title">Leave a Comment</p>

          <form>
            <div className="comments__form-row">
              <div className="comments__form-group">
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="comments__form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" />
              </div>
            </div>

            <div className="comments__form-group">
              <label htmlFor="comment">Message</label>
              <textarea id="comment" placeholder="Write your comment here…" />
            </div>
          </form>

          <button className="button">Post Comments</button>
        </div>

        <div className="comments__list">
          <div className="comments__title">Comments ({comments.length})</div>

          <div className="comments__list-items">
            {comments.map((comment) => (
              <div key={comment.id} className="comments__item">
                <img
                  className="comments__item-image"
                  src={`/${comment.userImage}`}
                />

                <div className="comments__item-content">
                  <p className="comments__item-header">
                    {comment.userName} • <span>{comment.date}</span>
                  </p>

                  <p className="comments__item-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="button button--green-border">Load More</button>
        </div>
      </div>
    </section>
  );
}
