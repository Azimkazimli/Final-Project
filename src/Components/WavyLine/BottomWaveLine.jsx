import React from "react";
import Image from "next/image";
import "./wavyLine.css";
import bottomWavy from "../../app/images/bottomWaveLine.png";

const BottomWave = ({ className }) => {
  return (
    <div className={`bottom-wave-wrapper ${className || ""}`}>
      <Image
        src={bottomWavy}
        alt="Bottom Wavy Line"
        className="bottom-wavy"
        width={1920}
        height={200}
        priority
      />
    </div>
  );
};

export default BottomWave;
