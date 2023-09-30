import React, { useEffect } from "react";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog(Home)";
import Footer from "../Footer/Footer";
import SliderImg from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);


  return (
    <div className="w-full min-h-full bg-neutral-900 ">
      <div className="w-full h-screen relative flex flex-col justify-center items-center ">
        <Header />
        <div className=" w-full m-auto ">
          <SliderImg
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
          />
        </div>
      </div>
      <Catalog/>
      <div className="w-full  mt-[20px] ">
      <Footer />
      </div>
    </div>
  );
};

export default Home;