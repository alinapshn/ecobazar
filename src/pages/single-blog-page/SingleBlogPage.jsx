import { useParams } from "react-router-dom";
import { getNewsById } from "../../../data/blog";
import { BlogInfo } from "./BlogInfo";

export function SingleBlogPage() {
  const { blogId } = useParams();
  const post = getNewsById(blogId);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <BlogInfo post={post} />
        </div>
      </div>
    </section>
  );
}
