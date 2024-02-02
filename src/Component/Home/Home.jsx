import React from "react";
import Header from "../Header&Footer/Header/Header";
// import Catalog from "../Catalog/Catalog(Home)";
import Footer from "../Header&Footer/Footer/Footer";

import Notification from "../Notification/Nontification";
import Slider10 from "./Slider10/Slider10";
import Righter from "../Header&Footer/Righter/Righter";

const Home = () => {
  return (
    <div className="bg-[#263238]">
      <Header />
      <div className="bg-[#253238] flex  justify-center">
        <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
          <Notification/>
          
          <Slider10/>
          <div className="flex flex-row">
            <p>
              hello world
            </p>
            <div className=" flex flex-1 justify-end">
            <Righter/>

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