"use client";
import React, { useState } from "react";
import coffeePlant from "../../app/images/coffeePlant.svg";
import smallBean from "../../app/images/smallBean.svg";
import Image from "next/image";
import AboutCaffee from "../../app/images/about.jpg";
import "./aboutUs.css";
import Button from "../Button/Button";

const AboutUs = () => {
  return (
    // {/* // ?-----------------------About Us Section----------------------- */}

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
            Tincidunt convallis id non maecenas sagittis non amet morbi elit sit
            sed pharetra faucibus elementum sollicitudin porta purus sit dolor
            sit dolor ist amec consectur.
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
  );
};

export default AboutUs;
