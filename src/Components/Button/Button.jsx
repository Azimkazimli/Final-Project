import React from "react";
import "./button.css";
import Link from "next/link";

const Button = ({ text, href, className }) => {
  return (
    <>
      {/* // ?-----------------------Buttons Components Page----------------------- */}
      <button className={className}>
        <Link href={href}>{text}</Link>
      </button>
    </>
  );
};

export default Button;
