import React from "react";
import Header from "../Header/Header";
import SliderImg from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="fixed top-0 left-0 w-full h-full z-[30] opacity-90">
        <Header />
      </div>
      <div className="absolute top-0 left-0 right-0 z-[19]">
        <div className="relative w-full h-screen">
          <SliderImg
            dots={true}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
          >
          </SliderImg>
        </div>
      </div>
    </div>
  );
};

export default Home;