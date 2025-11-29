"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import { getCallApi } from "@/Redux/features/product/coffeeProductSlice";
import ProductCategory from "@/Components/Category/Category";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function SearchByName() {
  const dispatch = useDispatch();

  const { myBigData, loading } = useSelector((state) => state.coffeeProduct);

  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState("none");
  const [saleOnly, setSaleOnly] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getCallApi());
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (searchValue.trim() === "") {
      setSuggestions([]);
      return;
    }

    const result = myBigData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSuggestions(result.slice(0, 6));
  }, [searchValue, myBigData, isClient]);

  let filteredProducts = [...myBigData];

  filteredProducts = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (saleOnly) {
    filteredProducts = filteredProducts.filter((item) => item.discountPrice);
  }

  if (minPrice !== "" || maxPrice !== "") {
    filteredProducts = filteredProducts.filter((item) => {
      const price = Number(item.discountPrice || item.price);
      return (
        (minPrice === "" || price >= Number(minPrice)) &&
        (maxPrice === "" || price <= Number(maxPrice))
      );
    });
  }

  const getFinal = (i) => Number(i.discountPrice || i.price);

  if (sortType === "low-high") {
    filteredProducts.sort((a, b) => getFinal(a) - getFinal(b));
  }

  if (sortType === "high-low") {
    filteredProducts.sort((a, b) => getFinal(b) - getFinal(a));
  }

  if (sortType === "a-z") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType === "z-a") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedItems = filteredProducts.slice(firstIndex, lastIndex);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  return (
    <section className="search-page">
      <div className="search-container">
        <h2 className="search-title">Search Products</h2>

        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search by name..."
            className="search-input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setCurrentPage(1);
            }}
          />

          {isClient && searchValue.trim() !== "" && suggestions.length > 0 && (
            <div className="autocomplete-box">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  className="autocomplete-item"
                  onClick={() => setSearchValue(item.name)}
                >
                  <img src={item.image} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-buttons">
          <button
            className={
              !saleOnly && sortType === "none" && !minPrice && !maxPrice
                ? "active"
                : ""
            }
            onClick={() => {
              setSaleOnly(false);
              setSortType("none");
              setMinPrice("");
              setMaxPrice("");
            }}
          >
            All Products
          </button>

          <button
            className={saleOnly ? "active" : ""}
            onClick={() => {
              setSaleOnly(true);
            }}
          >
            Sale Products
          </button>

          <button onClick={() => setShowPriceRange(!showPriceRange)}>
            Price Range
          </button>
        </div>

        {showPriceRange && (
          <div className="price-range-box">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        )}

        <div className="sort-buttons">
          <button
            className={sortType === "low-high" ? "active" : ""}
            onClick={() => setSortType("low-high")}
          >
            Price ↑
          </button>

          <button
            className={sortType === "high-low" ? "active" : ""}
            onClick={() => setSortType("high-low")}
          >
            Price ↓
          </button>

          <button
            className={sortType === "a-z" ? "active" : ""}
            onClick={() => setSortType("a-z")}
          >
            A → Z
          </button>

          <button
            className={sortType === "z-a" ? "active" : ""}
            onClick={() => setSortType("z-a")}
          >
            Z → A
          </button>
        </div>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <>
            <div className="search-items">
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item) => (
                  <ProductCategory key={item.id} item={item} />
                ))
              ) : (
                <p className="no-result">No products found</p>
              )}
            </div>

            {filteredProducts.length > itemsPerPage && (
              <Stack
                spacing={2}
                sx={{ alignItems: "center", marginTop: "1rem" }}
              >
                <Pagination
                  count={Math.ceil(filteredProducts.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Stack>
            )}
          </>
        )}
      </div>
    </section>
  );
}
