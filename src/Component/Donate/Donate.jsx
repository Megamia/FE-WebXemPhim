import React, { useState, useEffect } from "react";
import Header from "../Header&Footer/Header/Header";
import Footer from "../Header&Footer/Footer/Footer";
import Paypal from "./Paypal";

const Donate = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleDonate = () => {
    console.log("Đã chọn giá trị:", selectedPrice);
  };

  const product = {
    description: "Mãi iu Thư",
    price: selectedPrice,
  };

  return (
    <>
      <div className="bg-[#263238]">
        <Header />
        <div className="bg-[#253238] flex  justify-center">
          <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">

            <div className='flex flex-col items-center '>
              <div className=' flex justify-center '>
                <p className='text-[50px] text-white'>Chọn mức Donate: </p>
              </div>
              <div className="text-white">
                <input
                  type="radio"
                  name="price"
                  value="1.99"
                  checked={selectedPrice === "1.99"}
                  onChange={handlePriceChange}
                />
                <span>$1,99.00</span>
              </div>
              <div className="text-white">

                <input
                  type="radio"
                  name="price"
                  value="3.99"
                  checked={selectedPrice === "3.99"}
                  onChange={handlePriceChange}
                />
                <span>$3,99.00</span>
              </div>
              <div className="text-white">

                <input
                  type="radio"
                  name="price"
                  value="5.99"
                  checked={selectedPrice === "5.99"}
                  onChange={handlePriceChange}
                />
                <span>$5,99.00</span>
              </div>
              {selectedPrice && (
                <div className="mt-[20px]">
                  <Paypal product={product} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <Catalog/> */}
        <div className="w-full  mt-[20px] ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Donate;