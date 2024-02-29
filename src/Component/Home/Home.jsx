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
    <div className="bg-[#263238] ">
      <Header />
      <div className="bg-[#253238] flex  justify-center ">
        <div className="md:max-w-[1280px] w-full justify-center flex-col bg-[#141414] p-[20px] mt-[130px] rounded">
          <Notification />
          <div className="mx-[-10px] ">
            <Slider10 />
          </div>
          <div className="table table-fixed w-full">
            <div className="flex-row lg:table-cell pt-[20px] align-top">
              <div className="lg:mr-[20px] rounded">
              <Slider1/> 
              </div>
            </div>
            <div className="lg:table-cell w-[300px]">
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