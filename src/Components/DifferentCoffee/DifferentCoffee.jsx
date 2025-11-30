"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import differentBean from "../../app/images/differentBean.svg";
import differentCoffeeBean from "../../app/images/differentCoffeeBean.svg";
import differentCoffeeSack from "../../app/images/differentCoffeeSack.svg";
import different from "../../app/images/differentCoffee.jpg";
import "./differentCoffee.css";
export default function DifferentCoffee() {
  return (
    <>
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
    </>
  );
}
