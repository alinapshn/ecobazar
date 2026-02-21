import { useState, useMemo } from "react";
import { news, getRecentNews, allTags, categoriesList } from "../../../data/blog";
import { FiltersHeader } from "../../components/FiltersHeader";
import { BlogSidebar } from "../../components/BlogSidebar";
import { BlogsGrid } from "./BlogsGrid";
import { Pagination } from "../../components/Pagination";
import "./blogsPage.scss";

export function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [tempFilters, setTempFilters] = useState({
    search: "",
    category: "All categories",
    tag: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({ ...tempFilters });

  const isDirty =
    JSON.stringify(tempFilters) !== JSON.stringify(appliedFilters);

  const isFiltered =
    appliedFilters.search !== "" ||
    appliedFilters.category !== "All categories" ||
    appliedFilters.tag !== "";

  const handleApply = () => {
    setAppliedFilters(tempFilters);
    setCurrentPage(1);
  };

  const handleReset = () => {
    const defaultFilters = { search: "", category: "All categories", tag: "" };
    setTempFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setCurrentPage(1);
  };

  const recentPosts = getRecentNews(3);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const searchMatch = item.title
        .toLowerCase()
        .includes(appliedFilters.search.toLowerCase());
      const categoryMatch =
        appliedFilters.category === "All categories" ||
        item.category === appliedFilters.category;
      const tagMatch =
        !appliedFilters.tag || item.tags.includes(appliedFilters.tag);
      return searchMatch && categoryMatch && tagMatch;
    });
  }, [appliedFilters]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="blogs">
      <div className="container">
        <div className="blogs__wrapper">
          <FiltersHeader
            count={filteredNews.length}
            isDirty={isDirty}
            isFiltered={isFiltered}
            onApply={handleApply}
            onReset={handleReset}
          />

          <div className="blogs__content">
            <BlogSidebar
              categories={categoriesList}
              tags={allTags}
              filters={tempFilters}
              setFilters={setTempFilters}
              recentPosts={recentPosts}
            />

            <div className="blogs__content-grid">
              <BlogsGrid news={currentItems} />

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
