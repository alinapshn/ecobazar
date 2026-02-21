import blogJson from "../backend/blog.json";

export const news = blogJson;

export function getNewsById(blogId) {
  return news.find((item) => item.id === Number(blogId));
}

export function getRecentNews(limit = 3) {
  return [...news].reverse().slice(0, limit);
}

export const allTags = [...new Set(news.flatMap((item) => item.tags))];

export const categoriesList = (() => {
  const counts = news.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  return [
    { name: "All categories", count: news.length },
    ...Object.entries(counts).map(([name, count]) => ({ name, count })),
  ];
})();
