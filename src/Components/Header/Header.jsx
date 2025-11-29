"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import { TbMenu } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import caffeine from "../../app/images/caffeine.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getBasketLength } from "@/Redux/features/basket/basketSlice";
import { IoSearchCircle } from "react-icons/io5";
import LogoutButton from "../LogoutButton";

import { useUser } from "@/Components/UserContext";

const Header = () => {
  const { user, logoutUser, loadingUser } = useUser();

  const { count } = useSelector((state) => state.basket);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 997);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    dispatch(getBasketLength());
  }, []);

  const CART_PATH =
    "M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Z";

  if (loadingUser) {
    return null;
  }

  return (
    <header>
      <div className="header-container">
        <div className="caffeine-logo">
          <Link href="/">
            <Image
              className="caffeine-x"
              src={caffeine}
              alt="Caffeine Logo"
              width={180}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className="box">
          <div className="nav-box1">
            <nav className={isMenuOpen ? "nav open animate" : "nav"}>
              <ul>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/shop">SHOP</Link>
                </li>
                <li>
                  <Link href="/blog">BLOG</Link>
                </li>
              </ul>

              {isMenuOpen && (
                <div className="mobile-our-menu">
                  <Button text="OUR MENU" href="/menu" className="our-menu" />
                </div>
              )}
            </nav>
          </div>

          <Link href="/searchbyname">
            <div className="search-box">
              <IoSearchCircle className="search-btn" />
            </div>
          </Link>

          <Link href="/wishlist" className="cart-button">
            <div className="heart-icon">
              <FaHeart className="heart" />
            </div>
          </Link>

          <Link href="/addtobasket" className="cart-button">
            <div
              data-quantity={count}
              className="btn-cart"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                className="icon-cart"
                viewBox="0 0 24.38 30.52"
                height="30.52"
                width="24.38"
              >
                <path transform="translate(-3.62 -0.85)" d={CART_PATH}></path>
              </svg>
            </div>
          </Link>

          <button
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <TbMenu className="hamburger-icon" />
          </button>

          {user ? (
            <div className="user-info-box">
              <span className="logged-user-name">
                {user.fullName} {user.surname}
              </span>

              <LogoutButton />
            </div>
          ) : (
            <Link href="/login" className="cart-button">
              <FaRegCircleUser className="user-circle-icon" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
