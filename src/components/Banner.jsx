import React from "react";
import MyCarousel from "./Carousel";

const Banner = () => {
  return (
    <div className="hero_area">
      <div className="bg-box">
        {/* <img src="/pizza1.jpg" alt="" />
        <div className="overlay"></div> */}
        <MyCarousel></MyCarousel>
      </div>
    </div>
  );
};

export default Banner;
