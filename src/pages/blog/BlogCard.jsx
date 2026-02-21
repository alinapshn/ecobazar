import { Link } from "react-router-dom";
import TagIcon from "../../assets/img/blog/icons/tag.svg";
import UserIcon from "../../assets/img/blog/icons/user.svg";
import CommentIcon from "../../assets/img/blog/icons/comment.svg";
import GreenArrowIcon from "../../assets/img/icons/arrow-right-green.svg";
import "./blogCard.scss";

export function BlogCard({ post }) {
  const tags = [
    {
      id: 1,
      image: TagIcon,
      title: post.category,
    },
    {
      id: 2,
      image: UserIcon,
      title: `By ${post.author.name}`,
    },
    {
      id: 3,
      image: CommentIcon,
      title: post.commentsCount,
    },
  ];

  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <img src={post.mainImage} />

        <div className="blog-card__image-date">{post.date.short}</div>
      </div>

      <div className="blog-card__info">
        <div className="blog-card__info-tags">
          {tags.map((tag) => (
            <div key={tag.id} className="blog-card__info-tag">
              <img src={tag.image} />
              <p>{tag.title}</p>
            </div>
          ))}
        </div>

        <p className="blog-card__info-title">{post.title}</p>

        <Link to={`/blog/${post.id}`} className="blog-card__info-button">
          Read More
          <img className="blog-card__info-button--arrow" src={GreenArrowIcon} />
        </Link>
      </div>
    </div>
  );
}
