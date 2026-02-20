import { useState, useMemo } from "react";
import { products } from "../../../data/products";
import { ShopHeader } from "./ShopHeader";
import { Filters } from "./Filters";
import { ProductsGrid } from "./ProductsGrid";
import { Pagination } from "../../components/Pagination";
import "./shopPage.scss";

export function ShopPage() {
  const allPrices = products.map((product) => product.priceCents);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const categoryCounts = products.reduce((accumulator, product) => {
    const categoryName = product.category;
    accumulator[categoryName] = (accumulator[categoryName] || 0) + 1;
    return accumulator;
  }, {});

  const categoriesList = [
    {
      name: "All categories",
      count: products.length,
    },
    ...Object.keys(categoryCounts).map((name) => ({
      name: name,
      count: categoryCounts[name],
    })),
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [tempFilters, setTempFilters] = useState({
    category: "All categories",
    priceRange: [minPrice, maxPrice],
  });

  const [appliedFilters, setAppliedFilters] = useState({ ...tempFilters });

  const isDirty =
    JSON.stringify(tempFilters) !== JSON.stringify(appliedFilters);

  const isFiltered =
    appliedFilters.category !== "All categories" ||
    appliedFilters.priceRange[0] !== minPrice ||
    appliedFilters.priceRange[1] !== maxPrice;

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const categoryMatch =
          appliedFilters.category === "All categories" ||
          product.category === appliedFilters.category;

        const priceMatch =
          product.priceCents >= appliedFilters.priceRange[0] &&
          product.priceCents <= appliedFilters.priceRange[1];

        return categoryMatch && priceMatch;
      })
      .sort((productA, productB) => {
        if (productA.inStock !== productB.inStock) {
          return productA.inStock ? -1 : 1;
        }
        return 0;
      });
  }, [appliedFilters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleApply = () => {
    setAppliedFilters(tempFilters);
    setCurrentPage(1);
  };

  const handleReset = () => {
    const base = {
      category: "All categories",
      priceRange: [minPrice, maxPrice],
    };
    setTempFilters(base);
    setAppliedFilters(base);
    setCurrentPage(1);
  };

  return (
    <section className="shop-page">
      <div className="container">
        <div className="shop-page__wrapper">
          <ShopHeader
            count={filteredProducts.length}
            isDirty={isDirty}
            onApply={handleApply}
            onReset={handleReset}
            isFiltered={isFiltered}
          />
          <div className="shop-page__content">
            <Filters
              categories={categoriesList}
              tempFilters={tempFilters}
              setTempFilters={setTempFilters}
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
