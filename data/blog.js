import blogJson from "../backend/blog.json";

export const news = blogJson;

export function getNewsById(id) {
  return news.find((item) => item.id === Number(id));
}

export function getRecentNews(limit = 3) {
  return [...news].reverse().slice(0, limit);
}
