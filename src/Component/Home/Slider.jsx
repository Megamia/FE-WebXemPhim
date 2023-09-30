import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dotStyles = {
    position: "absolute",
    bottom: 20,
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
    margin: 0,
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  };

  const dotActiveStyle = {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "blue",
    margin: "0 5px",
    cursor: "pointer",
  };

  const dotInactiveStyle = {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 5px",
    cursor: "pointer",
  };

  const settings = {
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
        <ul style={dotStyles}>
          {dots.map((dot, index) => (
            <li
              key={index}
              style={index === currentSlide ? dotActiveStyle : dotInactiveStyle}
              onClick={() => {
                setCurrentSlide(index);
              }}
            >
              {dot}
            </li>
          ))}
        </ul>
      ),
  };

  return (
    <div className="ml-[50px] mr-[50px] relative">
      <Slider {...settings}>
        <div className="w-full slick-slide">
          <img
            src={process.env.PUBLIC_URL + "/img/asuna.png"}
            alt="asuna"
            className="h-screen w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#37373753]"></div>
        </div>
        <div className="w-full slick-slide">
          <img
            src={process.env.PUBLIC_URL + "/img/rem.png"}
            alt="rem"
            className="h-screen w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#37373753]"></div>
        </div>
        <div className="w-full slick-slide">
          <img
            src={process.env.PUBLIC_URL + "/img/anya.png"}
            alt="anya"
            className="h-screen w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#37373753]"></div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;