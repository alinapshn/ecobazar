import { BlogCard } from "./BlogCard";
import "./blogsGrid.scss";

export function BlogsGrid({ news }) {
  return (
    <div className="blogs-grid">
      {news.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
