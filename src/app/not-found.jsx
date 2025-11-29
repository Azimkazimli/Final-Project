import Link from "next/link";
import React from "react";
import "./globals.css";

const ErrorPage = () => {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <p className="not-found-404">404</p>

        <h1 className="not-found-title">PAGE NOT FOUND</h1>

        <p className="not-found-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
          phasellus mattis ac sed dolor set consectetur. Faucibus in sapien
          ornare et leo egestas blandit amet nunc pharetra vitae.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="not-font-btn nf-primary">
            GO TO HOMEPAGE
          </Link>

          <Link href="/menu" className="not-font-btn nf-secondary">
            VIEW MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
