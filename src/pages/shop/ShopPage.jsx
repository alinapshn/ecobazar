import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../../../data/products";
import { FiltersHeader } from "../../components/FiltersHeader";
import { Filters } from "./Filters";
import { ProductsGrid } from "./ProductsGrid";
import { Pagination } from "../../components/Pagination";
import "./shopPage.scss";

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const normalize = (str) =>
    str?.toLowerCase().trim().replace(/-/g, " ");

  const formatForDisplay = (cat) => {
    if (!cat || cat === "all") return "All categories";
    return cat
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const { minPrice, maxPrice, categoriesList } = useMemo(() => {
    const prices = products.map((p) => p.priceCents);

    const counts = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});

    const list = [
      { name: "All categories", count: products.length },
      ...Object.keys(counts).map((name) => ({
        name,
        count: counts[name],
      })),
    ];

    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
      categoriesList: list,
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const [tempFilters, setTempFilters] = useState(() => ({
    category: formatForDisplay(categoryFromUrl),
    priceRange: [minPrice, maxPrice],
  }));

  const [appliedFilters, setAppliedFilters] = useState(() => ({
    category: formatForDisplay(categoryFromUrl),
    priceRange: [minPrice, maxPrice],
  }));
  
  useEffect(() => {
    const newCategory = formatForDisplay(categoryFromUrl);

    setTempFilters((prev) => ({
      ...prev,
      category: newCategory,
    }));

    setAppliedFilters((prev) => ({
      ...prev,
      category: newCategory,
    }));

    setCurrentPage(1);
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const categoryMatch =
          appliedFilters.category === "All categories" ||
          normalize(product.category) ===
            normalize(appliedFilters.category);

        const priceMatch =
          product.priceCents >= appliedFilters.priceRange[0] &&
          product.priceCents <= appliedFilters.priceRange[1];

        return categoryMatch && priceMatch;
      })
      .sort((a, b) =>
        a.inStock === b.inStock ? 0 : a.inStock ? -1 : 1
      );
  }, [appliedFilters]);

  const itemsPerPage = 15;
  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApply = () => {
    setAppliedFilters(tempFilters);

    if (tempFilters.category === "All categories") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: tempFilters.category
          .toLowerCase()
          .replace(/\s+/g, "-"),
      });
    }

    setCurrentPage(1);
  };

  const handleReset = () => {
    const baseFilters = {
      category: "All categories",
      priceRange: [minPrice, maxPrice],
    };

    setTempFilters(baseFilters);
    setAppliedFilters(baseFilters);
    setSearchParams({});
    setCurrentPage(1);
  };

  const isFiltered =
    appliedFilters.category !== "All categories" ||
    appliedFilters.priceRange[0] !== minPrice ||
    appliedFilters.priceRange[1] !== maxPrice;

  return (
    <section className="shop-page">
      <div className="container">
        <div className="shop-page__wrapper">
          <FiltersHeader
            count={filteredProducts.length}
            onApply={handleApply}
            onReset={handleReset}
            isDirty={
              JSON.stringify(tempFilters) !==
              JSON.stringify(appliedFilters)
            }
            isFiltered={isFiltered}
          />

          <div className="shop-page__content">
            <Filters
              categories={categoriesList}
              tempFilters={tempFilters}
              setTempFilters={setTempFilters}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />

            <div className="shop-page__content-grid">
              <ProductsGrid products={currentItems} />

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