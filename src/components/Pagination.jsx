import "./pagination.scss";

export function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={
            currentPage === i + 1
              ? "pagination__button pagination__button--active"
              : "pagination__button pagination__button--unactive"
          }
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
