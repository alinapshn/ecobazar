import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/img/icons/search.svg";
import CalendarIcon from "../assets/img/blog/icons/calendar.svg";
import GalleryImage1 from "../assets/img/blog/gallery/gallery-1.png";
import GalleryImage2 from "../assets/img/blog/gallery/gallery-2.png";
import GalleryImage3 from "../assets/img/blog/gallery/gallery-3.png";
import GalleryImage4 from "../assets/img/blog/gallery/gallery-4.png";
import GalleryImage5 from "../assets/img/blog/gallery/gallery-5.png";
import GalleryImage6 from "../assets/img/blog/gallery/gallery-6.png";
import GalleryImage7 from "../assets/img/blog/gallery/gallery-7.png";
import GalleryImage8 from "../assets/img/blog/gallery/gallery-8.png";
import "./blogSidebar.scss";

export function BlogSidebar({
  categories = [],
  tags = [],
  filters = {},
  setFilters,
  recentPosts = [],
}) {
  const gallery = [
    {
      id: 1,
      image: GalleryImage1,
    },
    {
      id: 2,
      image: GalleryImage2,
    },
    {
      id: 3,
      image: GalleryImage3,
    },
    {
      id: 4,
      image: GalleryImage4,
    },
    {
      id: 5,
      image: GalleryImage5,
    },
    {
      id: 6,
      image: GalleryImage6,
    },
    {
      id: 7,
      image: GalleryImage7,
    },
    {
      id: 8,
      image: GalleryImage8,
    },
  ];

  const navigate = useNavigate();

  const handleAction = (type, value) => {
    if (setFilters) {
      setFilters({ ...filters, [type]: value });
    } else {
      navigate(`/blog?${type}=${value}`);
    }
  };

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__wrapper">
        <div className="blog-sidebar__search">
          <img src={SearchIcon} />

          <input
            type="text"
            placeholder="Search..."
            value={filters.search}
            onChange={(e) =>
              setFilters?.({ ...filters, search: e.target.value })
            }
          />
        </div>
      </div>

      <div className="blog-sidebar__wrapper">
        <div className="blog-sidebar__categories">
          <p className="blog-sidebar__title">Top Categories</p>

          <div className="blog-sidebar__categories-list">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`blog-sidebar__categories-item ${filters?.category === category.name ? "active" : ""}`}
                onClick={() => handleAction("category", category.name)}
              >
                <p>{category.name}</p>
                <span>({category.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blog-sidebar__wrapper">
        <div className="blog-sidebar__tags">
          <p className="blog-sidebar__title">Popular Tag</p>

          <div className="blog-sidebar__tags-list">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`blog-sidebar__tags-tag ${filters?.tag === tag ? "active" : ""}`}
                onClick={() => handleAction("tag", tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="blog-sidebar__wrapper">
        <div className="blog-sidebar__gallery">
          <p className="blog-sidebar__title">Our Gallery</p>

          <div className="blog-sidebar__gallery-grid">
            {gallery.map((image) => (
              <img key={image.id} src={image.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="blog-sidebar__wrapper">
        <div className="blog-sidebar__recent">
          <p className="blog-sidebar__title">Recently Added</p>

          <div className="blog-sidebar__recent-list">
            {recentPosts.map((post) => (
              <div key={post.id} className="blog-sidebar__recent-item">
                <img
                  className="blog-sidebar__recent-image"
                  src={`/${post.mainImage}`}
                  alt={post.title}
                />

                <div className="blog-sidebar__recent-info">
                  <p>{post.title}</p>

                  <span>
                    <img src={CalendarIcon} />
                    {post.date.full}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
