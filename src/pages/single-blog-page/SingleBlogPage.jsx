import { useParams } from "react-router-dom";
import {
  getNewsById,
  getRecentNews,
  allTags,
  categoriesList,
} from "../../../data/blog";
import { BlogInfo } from "./BlogInfo";
import { BlogSidebar } from "../../components/BlogSidebar";
import { Comments } from "./Comments";
import "./singleBlogPage.scss";

export function SingleBlogPage() {
  const { blogId } = useParams();
  const post = getNewsById(blogId);

  const recentPosts = getRecentNews(3);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <div className="blog__content">
            <BlogInfo post={post} />

            <Comments comments={post.comments} />
          </div>

          <BlogSidebar
            categories={categoriesList}
            tags={allTags}
            recentPosts={recentPosts}
          />
        </div>
      </div>
    </section>
  );
}
