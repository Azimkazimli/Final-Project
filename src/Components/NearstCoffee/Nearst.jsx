import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import topNearly from "../../app/images/top.svg";
import bottomNearly from "../../app/images/bottomNearly.svg";
import "./nearst.css";
const NearstCoffee = () => {
  return (
    //   {/* // ?-----------------------Nearst Coffee Section----------------------- */}

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
  );
};

export default NearstCoffee;
