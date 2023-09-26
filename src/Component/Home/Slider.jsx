import React from "react";
import Slider from "react-slick";

const SliderImg = () => {
    const settings = {
        speed: 3000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,    
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <div>
            <Slider  {...settings}>
                <div className="w-full slick-slide">
                    <img
                        src={process.env.PUBLIC_URL + "/img/asuna.png"}
                        alt="asuna"
                        className="h-screen w-full object-cover"
                    />
                    <div className=" absolute top-0 left-0 w-full h-full bg-[#37373753]"></div>
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