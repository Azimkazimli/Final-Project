import React from "react";
import "./wavyLine.css";
import Image from "next/image";
import Wavy from "../../app/images/topWaveLine.svg";
const TopWavy = ({ clasName }) => {
  return (
    <div className={clasName}>
      <Image src={Wavy} alt="Top Wavy Line" className="top-wavy-line" />
    </div>
  );
};
export default TopWavy;
