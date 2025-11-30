"use client";
import React, { useState } from "react";
import "./page.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import espresso from "../../images/espresso.svg";
import Image from "next/image";
import Button from "@/Components/Button/Button";
import rightpicture from "../../images/leftpicture.svg";
import leftpicture from "../../images/rightpicture.svg";
import wavy1 from "../../images/bottom.svg";
import ProductCategory from "@/Components/Category/Category";
import {
  getCallApi,
  getFilter,
} from "@/Redux/features/product/coffeeProductSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Articles from "@/Components/Articles/Articles";
import AboutUs from "@/Components/AboutUs/AboutUs";
import DifferentCoffee from "@/Components/DifferentCoffee/DifferentCoffee";
import SpecialCoffee from "@/Components/Special/Special";
import NearstCoffee from "@/Components/NearstCoffee/Nearst";

const HomePage = () => {
  const dispatch = useDispatch();
  const { myBigData, loading, category, categoryFilter, selectedCategory } =
    useSelector((state) => state.coffeeProduct);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getCallApi());
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    selectedCategory === "All"
      ? myBigData.slice(indexOfFirstItem, indexOfLastItem)
      : categoryFilter;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <main>
      <section className="heroSection">
        <div className="container">
          <Image src={leftpicture} alt="" className="leftBean" width={109} />
          <Image src={rightpicture} alt="" className="rightBean" width={109} />

          <div className="caffeineContent">
            <div className="heroLogoWrapper">
              <Image src={espresso} alt="Caffeine Espresso Logo" />
            </div>

            <h1 className="caffeineTitle">
              EXPERIENCE COFFEE LIKE NEVER BEFORE
            </h1>

            <p className="caffeineDescription">
              Potenti eget accumsan commodo vel pharetra purus eleifend
              malesuada sit metus mauris nec scelerisque ut viverra elementum
              facilisis tristique.
            </p>

            <Button text="Explore our menu" href="" className="explorebtn" />
          </div>

          <div className="bottom-wavy-line">
            <Image src={wavy1} alt="" className="wavy1" />
          </div>
        </div>
      </section>

      {/* // ?-----------------------Special Coffee Section----------------------- */}

      <section className="special-coffee-section">
        <SpecialCoffee />
      </section>

      {/* // ?-----------------------Nearst Coffee Section----------------------- */}

      <section className="nearst-coffee-section">
        <NearstCoffee />
      </section>

      {/* // ?-----------------------Category Section----------------------- */}
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

      {/* // ?-----------------------About Section----------------------- */}

      <section className="about-section">
        <AboutUs />
      </section>

      {/* // ?-----------------------DIFFERENT COFFEE Section----------------------- */}

      <section className="different-section">
        <DifferentCoffee />
      </section>

      {/* // ?-----------------------TESTIMONIALS SECTION----------------------- */}

      <section className="testimonials-section">
        <Testimonials />
      </section>

      {/* // ?-----------------------Articles Section----------------------- */}

      <section className="articles-section">
        <Articles />
      </section>
    </main>
  );
};

export default HomePage;
