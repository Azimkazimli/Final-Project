"use client";
import React, { useState } from "react";
import "./page.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import caffeinebg from "../../images/caffeinebg.jpg";
import espresso from "../../images/espresso.svg";
import differentBean from "../../images/differentBean.svg";
import specialBean1 from "../../images/specialBean1.svg";
import specialBean2 from "../../images/specialBean2.svg";
import differentCoffeeBean from "../../images/differentCoffeeBean.svg";
import differentCoffeeSack from "../../images/differentCoffeeSack.svg";
import TasteCoffee1 from "../../images/tasteCoffee1.jpg";
import TasteCoffee2 from "../../images/tasteCoffee2.jpg";
import TasteCoffee3 from "../../images/tasteCoffee3.jpg";
import TasteCoffee4 from "../../images/tasteCoffee4.jpg";
import TasteCoffee5 from "../../images/tasteCoffee5.jpg";
import coffeePour from "../../images/coffeePour.jpg";
import coffeepack from "../../images/coffeepack.jpg";
import specialCoffee1 from "../../images/specialCoffee1.svg";
import specialCoffee2 from "../../images/specialCoffee2.svg";
import specialCoffee3 from "../../images/specialCoffee3.svg";
import different from "../../images/differentCoffee.jpg";
import coffeePlant from "../../images/coffeePlant.svg";
import smallBean from "../../images/smallBean.svg";
import Image from "next/image";
import AboutCaffee from "../../images/about.jpg";
import customerTestimonials1 from "../../images/customerTestimonials1.jpg";
import customerTestimonials2 from "../../images/customerTestimonials2.jpg";
import customerTestimonials3 from "../../images/customerTestimonials3.jpg";
import Flower from "../../images/flower.svg";
import CoffeebeansUp from "../../images/coffeebeansUp.svg";
import coffeeArticles from "../../images/coffeeArticles.svg";
import CoffeeSack from "../../images/coffeeSack.svg";
import beansUpBottom from "../../images/beans-up-bottom.svg";
import Button from "@/Components/Button/Button";
import bottomNearly from "../../images/bottomNearly.svg";
import rightpicture from "../../images/leftpicture.svg";
import leftpicture from "../../images/rightpicture.svg";
// import LeftCoffeBean from "@/Components/leftCoffeBean/leftCoffeBean";
// import RightCoffeBean from "@/Components/RightCoffeBean/RightCoffeBean";
import WavyLine from "../../images/topWaveLine.svg";
import wavy1 from "../../images/bottom.svg";
import topNearly from "../../images/top.svg";
import BottomWave from "../../images/bottomWaveLine.png";
import ProductCategory from "@/Components/Category/Category";
import {
  getCallApi,
  getFilter,
} from "@/Redux/features/product/coffeeProductSlice";
import Link from "next/link";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
      {/* // ?-----------------------Taste Coffe SECTION----------------------- */}
      <section className="taste-coffe-section">
        <div className="taste-coffe-container">
          <div className="taste-coffe-texts">
            <div className="left-texts">
              <h4>WELCOME TO CAFFEINE</h4>
              <h2>EXPERIENCE A NEW WAY TO TASTE COFFEE</h2>
            </div>

            <p>
              Tincidunt convallis id non maecenas sagittis non amet morbi elit
              sit sed pharetra faucibus elementum sollicitudin porta purus sit
              dolor sit.
            </p>
          </div>

          <div className="taste-coffe-images">
            <div className="left-big-image">
              <Image src={TasteCoffee1} alt="coffee" className="big-image" />
            </div>

            <div className="right-small-images">
              <div className="top-row">
                <Image src={TasteCoffee2} alt="coffee" />
                <Image src={TasteCoffee3} alt="coffee" />
              </div>

              <div className="bottom-row">
                <Image src={TasteCoffee4} alt="coffee" />
                <Image src={TasteCoffee5} alt="coffee" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // ?-----------------------Special Coffee Section----------------------- */}

      <section className="special-coffee-section">
        <div className="special-coffee-container">
          <Image
            className="specialBean1"
            src={specialBean1}
            alt="Organic Coffee"
          />
          <Image
            className="specialBean2"
            src={specialBean2}
            alt="Organic Coffee"
          />

          <div className="special-title">
            <span>WHY US</span>

            <h2>
              WHAT MAKES OUR COFFEE <br /> VERY SPECIAL
            </h2>
          </div>

          <div className="special-items">
            <div className="special-item">
              <Image src={specialCoffee1} alt="Organic Coffee" />

              <h3>ORGANIC COFFEE</h3>

              <p>
                A id id mattis neque risus leo aliquam tellus tempus eget eget
                sit enim sem volutpat quisque diam mi.
              </p>
            </div>

            <div className="special-item">
              <Image src={specialCoffee2} alt="Hand Made Selections" />

              <h3>HAND-MADE SELECTIONS</h3>

              <p>
                Elementum habitant imperdiet egestas ut nibh ut ultrices
                faucibus pellentesque mattis tortor phasellus.
              </p>
            </div>

            <div className="special-item">
              <Image src={specialCoffee3} alt="Traditional Brewing" />

              <h3>TRADITIONAL BREWING</h3>

              <p>
                Sit neque eu tellus nisl metus purus fringilla ipsum eu varius
                vitae nisi mauris enim habitant posuere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* // ?-----------------------Nearst Coffee Section----------------------- */}

      <section className="nearst-coffee-section">
        <div className="nearst-coffee-container">
          <div className="nearst-top-wave">
            <Image src={topNearly} alt="top wave" />
          </div>

          <div className="nearst-content">
            <div className="nearst-left">
              <span className="nearst-small-title">OUR MENU</span>

              <h4 className="nearst-big-title">
                EXPLORE WHAT WE <br /> HAVE TO OFFER YOU
              </h4>

              <Button text="Explore our menu" href="" className="explorebtn" />
            </div>

            <div className="nearst-divider"></div>

            <div className="nearst-right">
              <span className="nearst-small-title">LOCATIONS</span>

              <h4 className="nearst-big-title">
                FIND YOUR NEAREST <br /> COFFEE SHOP
              </h4>

              <Button text="VIEW LOCATIONS" href="" className="view-btn" />
            </div>
          </div>

          <div className="nearst-bottom-wave">
            <Image src={bottomNearly} alt="bottom wave" />
          </div>
        </div>
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
        <div className="about-container">
          <Image className="plant" src={coffeePlant} alt="coffee plant" />
          <Image className="smallBean" src={smallBean} alt="coffee bar" />

          <div className="about-image-wrap">
            <Image src={AboutCaffee} alt="coffee bar" />
          </div>

          <div className="about-content">
            <span className="about-small-label">ABOUT US</span>

            <h2 className="about-title">
              READ THE STORY <br /> BEHIND US
            </h2>

            <p className="about-text">
              Tincidunt convallis id non maecenas sagittis non amet morbi elit
              sit sed pharetra faucibus elementum sollicitudin porta purus sit
              dolor sit dolor ist amec consectur.
            </p>

            <p className="about-text">
              Eget euismod nunc cursus id eget donec vel habitasse accumsan
              placerat egestas cursus proin lobortis pellentesque aenean velit
              velit orci massa volutpat.
            </p>

            <Button text="LEARN MORE" href="/menu" className="learn-more-btn" />
          </div>
        </div>
      </section>

      {/* // ?-----------------------DIFFERENT COFFEE Section----------------------- */}

      <section className="different-section">
        <div className="different-container ">
          <Image src={differentBean} alt="" className="decor-left" />

          <Image src={differentCoffeeBean} alt="" className="decor-right" />

          <Image src={differentCoffeeSack} alt="" className="decor-bottom" />

          <span className="coffee-small-label">ABOUT OUR COFFEE</span>

          <h4 className="makes-title">WHAT MAKES OUR COFFEE DIFFERENT?</h4>

          <div className="coffee-grid">
            <div className="coffee-column">
              <div className="coffee-card">
                <h3 className="coffee-card-title">ORGANIC COFFEE</h3>

                <p className="coffee-card-text">
                  Tellus, faucibus rhoncus nisl, duis. Id amet ipsum risus
                  condimentum viverra lectus aliquam a rutrum tellus quis non
                  dignissim egestas amet sed.
                </p>

                <div className="coffee-border"></div>
              </div>

              <div className="coffee-card coffee-card-lower">
                <h3 className="coffee-card-title">PESTICIDE FREE</h3>

                <p className="coffee-card-text">
                  In sit lacus imperdiet blandit faucibus enim ante quis euismod
                  tristique laoreet ac semper tempus morbi risus tortor viverra
                  ipsum tristique.
                </p>
              </div>
            </div>

            <div className="coffee-image-wrap">
              <Image
                src={different}
                alt="Coffee beans"
                className="coffee-image"
              />
            </div>

            <div className="coffee-column">
              <div className="coffee-card">
                <h3 className="coffee-card-title">HAND-PICKED</h3>

                <p className="coffee-card-text">
                  Gravida eu at pharetra et aet. At pellentesque nulla commodo
                  pulvinar vulputate amet eleifend lectus dignissim neque lectus
                  amet.
                </p>

                <div className="coffee-border"></div>
              </div>

              <div className="coffee-card">
                <h3 className="coffee-card-title">ALWAYS FRESH</h3>

                <p className="coffee-card-text">
                  Arcu amet purus in at rhoncus ullamcorper tristique nibh
                  faucibus facilisi ultrices egestas cras est varius ut volutpat
                  porta magnis.
                </p>
              </div>
            </div>
          </div>

          <Link href="#" className="different-btn">
            BROWSE OUR MENU
          </Link>
        </div>
      </section>

      {/* // ?-----------------------TESTIMONIALS SECTION----------------------- */}

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-head">
            <div className="testimonials-left">
              <span className="small-label">TESTIMONIALS</span>

              <h2 className="customers">What our customers say about us</h2>
            </div>

            <Link href="#" className="testimonials-btn">
              BROWSE OUR MENU
            </Link>
          </div>

          <div className="testimonials-grid">
            <div className="testimonials-card">
              <Image src={customerTestimonials1} alt="Sophie Moore" />

              <div className="testimonials-content">
                <h3>Simply delicious</h3>

                <p>
                  In sit lacus imperdiet blandit faucibus enim ante quis euismod
                  tristique laoreet ac semper tempus morbiilm.
                </p>

                <span className="author">Sophie Moore, New York</span>
              </div>
            </div>

            <div className="testimonials-card">
              <Image src={customerTestimonials2} alt="John Carter" />

              <div className="testimonials-content">
                <h3>The best coffee</h3>

                <p>
                  In sit lacus imperdiet blandit faucibus enim ante quis euismod
                  tristique laoreet ac semper tempus morbiilm.
                </p>

                <span className="author">John Carter, San Francisco</span>
              </div>
            </div>

            <div className="testimonials-card">
              <Image src={customerTestimonials3} alt="Lily Woods" />

              <div className="testimonials-content">
                <h3>Great coffee and service</h3>

                <p>
                  In sit lacus imperdiet blandit faucibus enim ante quis euismod
                  tristique laoreet ac semper tempus morbiilm.
                </p>

                <span className="author">Lily Woods, Los Angeles</span>
              </div>
            </div>
          </div>

          <Image className="deco flower" src={Flower} alt="Flower" />

          <Image
            className="deco beans-up"
            src={CoffeebeansUp}
            alt="Coffee beans up"
          />

          <Image
            className="deco beans-up-right"
            src={CoffeebeansUp}
            alt="Coffee beans up"
          />

          <Image className="deco sack" src={CoffeeSack} alt="Coffee sack" />

          <Image
            className="deco beans-up-bottom"
            src={beansUpBottom}
            alt="Coffee beans up"
          />
        </div>
      </section>

      {/* // ?-----------------------Articles Section----------------------- */}

      <section className="articles-section">
        <div className="articles-container">
          <Image className="coffee-articles" src={coffeeArticles} alt="" />

          <div className="articles-header">
            <div className="articles-left">
              <span className="articles-subtitle">OUR BLOG</span>

              <h2 className="articles-title">ARTICLES&NEWS</h2>
            </div>

            <Button text="BROWSE ARTICLES" href="" className="articles-btn" />
          </div>

          <div className="articles-grid">
            <div className="article-card">
              <Image
                src={coffeePour}
                alt="American Coffee"
                className="article-img"
              />

              <div className="article-content">
                <div className="article-meta">
                  <span>RESOURCES</span>

                  <div className="line">|</div>

                  <span>NOV 24, 2022</span>
                </div>

                <p className="article-text">
                  WHAT IS AMERICAN COFFEE, WHERE IS IT FROM & HOW TO MAKE IT
                  RIGHT
                </p>
              </div>
            </div>

            <div className="article-card">
              <Image
                src={coffeepack}
                alt="Instant Coffee"
                className="article-img"
              />

              <div className="article-content">
                <div className="article-meta">
                  <span>RESOURCES</span>

                  <div className="line">|</div>

                  <span>NOV 24, 2022</span>
                </div>

                <p className="article-text">
                  THE BEST INSTANT COFFEE YOU CAN HAVE RIGHT NOW ON A BUDGET
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
