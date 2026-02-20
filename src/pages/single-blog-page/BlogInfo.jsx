import { Socials } from "../../components/Socials";
import TagIcon from "../../assets/img/blog/icons/tag.svg";
import UserIcon from "../../assets/img/blog/icons/user.svg";
import CommentIcon from "../../assets/img/blog/icons/comment.svg";
import "./blogInfo.scss";

export function BlogInfo({ post }) {
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
    <div className="blog-info">
      <div className="blog-info__image">
        <img src={`/${post.mainImage}`} />
      </div>

      <div className="blog-info__heading">
        <div className="blog-info__heading-tags">
          {tags.map((tag) => (
            <div key={tag.id} className="blog-info__heading-tag">
              <img src={tag.image} />
              <p>{tag.title}</p>
            </div>
          ))}
        </div>

        <h5>{post.title}</h5>

        <div className="blog-info__heading-info">
          <div className="blog-info__heading-author">
            <img src={`/${post.author.avatar}`} />

            <div>
              <p>{post.author.fullName}</p>
              <span>
                {post.date.full} • {post.readTime}
              </span>
            </div>
          </div>

          <Socials withTitle={false} />
        </div>
      </div>

      <div className="blog-info__content">
        <p className="blog-info__content-subtitle">{post.content.lead}</p>

        <div className="blog-info__content-text">
          {post.content.body.slice(0, 2).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="blog-info__content-gallery">
            {post.content.gallery.map((img, index) => (
              <img key={index} src={`/${img}`} alt="inner gallery" />
            ))}
          </div>

          {post.content.body.slice(2).map((paragraph, index) => (
            <p key={index + 2}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
