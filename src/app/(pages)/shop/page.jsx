"use client";
import React, { useState } from "react";
import "./page.css";
import ProductCategory from "@/Components/Category/Category";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "@/Redux/features/product/coffeeProductSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ShopPage = () => {
  const dispatch = useDispatch();

  const { myBigData, loading, category, selectedCategory } = useSelector(
    (state) => state.coffeeProduct
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myBigData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <section className="section-category">
      <div className="container-category">
        <div className="header-category">
          <span>OUR MENU</span>
          <h2>WHAT MAKES OUR COFFEE VERY SPECIAL</h2>

          <div className="menu-categories">
            {category &&
              category.map((categoryName, index) => (
                <button
                  className={`category-btn ${
                    selectedCategory === categoryName ? "active" : ""
                  }`}
                  onClick={() => {
                    dispatch(getFilter(categoryName));
                    setCurrentPage(1);
                  }}
                  key={index}
                >
                  {categoryName}
                </button>
              ))}
          </div>
        </div>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div className="menu-category">
            <div className="menu-items">
              {currentItems &&
                currentItems.map((item) => (
                  <ProductCategory key={item.id} item={item} />
                ))}
            </div>

            {selectedCategory === "All" && (
              <Stack
                spacing={2}
                sx={{ alignItems: "center", marginTop: "2rem" }}
              >
                <Pagination
                  count={Math.ceil(myBigData.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Stack>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopPage;
