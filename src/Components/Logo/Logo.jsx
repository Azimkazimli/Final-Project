import React from "react";
import "./logo.css";
import Link from "next/link";
import Image from "next/image";
import caffeine from "../../app/images/caffeine.svg";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <Image
          className="caffeine-x"
          src={caffeine}
          alt="Caffeine Logo"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
