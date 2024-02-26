import React from "react";
import Header from "../Header&Footer/Header/Header";
// import Catalog from "../Catalog/Catalog(Home)";
import Footer from "../Header&Footer/Footer/Footer";
import Notification from "./Notification/Nontification";
import Slider10 from "./Slider10/Slider10";
import Righter from "../Header&Footer/Righter/Righter";
import Slider1 from "./Slider1/Slider1";

const Home = () => {
  return (
    <div className="bg-[#263238]">
      <Header />
      <div className="bg-[#253238] flex  justify-center">
        <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
          <Notification />
          <div className="mx-[-10px] ">
            <Slider10 />
          </div>
          <div className="flex flex-row ">
            <div className="flex-row w-2/3 flex-1 pt-[20px]">
              <div className="mr-[20px]">
              <Slider1/> 
              </div>
            </div>
            <div className=" flex justify-end ">
              <Righter />
            </div>
          </div>
        </div>
      </div>
      {/* <Catalog/> */}
      <div className="w-full  mt-[20px] ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;