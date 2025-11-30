"use client";
import Image from "next/image";
import customerTestimonials1 from "../../app/images/customerTestimonials1.jpg";
import customerTestimonials2 from "../../app/images/customerTestimonials2.jpg";
import customerTestimonials3 from "../../app/images/customerTestimonials3.jpg";
import CoffeebeansUp from "../../app/images/coffeebeansUp.svg";
import CoffeeSack from "../../app/images/coffeeSack.svg";
import beansUpBottom from "../../app/images/beans-up-bottom.svg";
import Flower from "../../app/images/flower.svg";
import "./testimonials.css";
import Link from "next/link";
const Testimonials = () => {
  return (
    
    //   {/* // ?-----------------------TESTIMONIALS SECTION----------------------- */}

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
  );
};

export default Testimonials;
