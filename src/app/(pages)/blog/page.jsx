import AboutUs from "@/Components/AboutUs/AboutUs";
import DifferentCoffee from "@/Components/DifferentCoffee/DifferentCoffee";
import NearstCoffee from "@/Components/NearstCoffee/Nearst";
import SpecialCoffee from "@/Components/Special/Special";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <DifferentCoffee />
      <NearstCoffee />
      <SpecialCoffee />
      <AboutUs />

    </>
  );
};

export default BlogPage;
