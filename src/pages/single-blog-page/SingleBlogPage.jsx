import { useParams } from "react-router-dom";
import { getNewsById } from "../../../data/blog";
import { BlogInfo } from "./BlogInfo";

export function SingleBlogPage() {
  const { id } = useParams();
  const post = getNewsById(id);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__wrapper"></div>
      </div>
    </section>
  );
}
