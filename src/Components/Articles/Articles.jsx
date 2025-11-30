import React from "react";
import "./articles.css";
import Image from "next/image";
import coffeeArticles from "../../app/images/coffeeArticles.svg";
import coffeePour from "../../app/images/coffeePour.jpg";
import coffeepack from "../../app/images/coffeepack.jpg";
import Button from "../Button/Button";
const Articles = () => {
  return (
    
    //   {/* // ?-----------------------Articles Section----------------------- */}

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
                WHAT IS AMERICAN COFFEE, WHERE IS IT FROM & HOW TO MAKE IT RIGHT
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
  );
};

export default Articles;
