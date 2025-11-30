"use client";
import React from "react";
import "./special.css";
import specialCoffee1 from "../../app/images/specialCoffee1.svg";
import specialCoffee2 from "../../app/images/specialCoffee2.svg";
import specialCoffee3 from "../../app/images/specialCoffee3.svg";
import Image from "next/image";
const SpecialCoffee = () => {
  return (
    //   {/* // ?-----------------------Special Coffee Section----------------------- */}

    <section className="special-coffee-section">
      <div className="special-coffee-container">
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
              A id id mattis neque risus leo aliquam tellus tempus eget eget sit
              enim sem volutpat quisque diam mi.
            </p>
          </div>

          <div className="special-item">
            <Image src={specialCoffee2} alt="Hand Made Selections" />

            <h3>HAND-MADE SELECTIONS</h3>

            <p>
              Elementum habitant imperdiet egestas ut nibh ut ultrices faucibus
              pellentesque mattis tortor phasellus.
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
  );
};

export default SpecialCoffee;
