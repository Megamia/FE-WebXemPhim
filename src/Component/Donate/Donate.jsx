import React, { useState } from "react";
import Header from "../Header&Footer/Header/Header";
import Footer from "../Header&Footer/Footer/Footer";
import Paypal from "./Paypal";

const Donate = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showPaypal, setShowPaypal] = useState(false);

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    setShowPaypal(true);
  };

  const products = [
    {
      price: "1.99",
      image: "../../img/donate1.jpg",
      description: "Nghèo thế?",
    },
    {
      price: "3.99",
      image: "../../img/donate2.jpg",
      description: "Cũng ra gì đấy",
    },
    {
      price: "5.99",
      image: "../../img/donate3.jpg",
      description: "Em yêu anh",
    },
  ];

  return (
    <>
      <div className="bg-[#263238]">
        <Header />
        <div className="bg-[#253238] flex justify-center">
          <div className="w-[1280px] justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
            <div className="flex justify-center">
              <p className="text-4xl text-white">Chọn mức Donate: </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex flex-row mt-[30px]">
                {products.map((product) => (
                  <div className="px-[30px]">
                    <div
                      className={`text-white cursor-pointer ${selectedPrice === product.price ? "border-red-500" : ""
                        }`}
                      key={product.price}
                      onClick={() => handlePriceChange(product.price)}
                    >
                      <img
                        src={product.image}
                        alt={`$${product.price}`}
                        className="w-[200px] h-[300px] "
                      />
                      <span className="text-white flex justify-center mt-[10px]">
                        ${product.price}
                      </span>
                      {selectedPrice === product.price && showPaypal && (
                        <div className="mt-[10px] ]">
                          <Paypal product={product} />
                        </div>
                      )}
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Donate;