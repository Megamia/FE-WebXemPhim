import React, { useState } from 'react';
import Paypal from './Paypal';

const Donate = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleDonate = () => {
    // Thực hiện các hành động cần thiết khi người dùng nhấp vào nút donate
    // Ví dụ: gửi yêu cầu thanh toán với giá trị selectedPrice
    console.log("Đã chọn giá trị:", selectedPrice);
  };

  const product = {
    description: "Mãi iu Thư",
    price: selectedPrice,
  };

  return (
    <div className='flex flex-col items-center '>
      <div className=' flex justify-center mt-[100px]'>
        <p className='text-[50px]'>Chọn mức Donate: </p>
      </div>
      <div>
        <input 
          type="radio" 
          name="price" 
          value="1.99" 
          checked={selectedPrice === "1.99"} 
          onChange={handlePriceChange} 
        />
        <span>$1,99.00</span>
      </div>
      <div>
        <input 
          type="radio" 
          name="price" 
          value="3.99" 
          checked={selectedPrice === "3.99"} 
          onChange={handlePriceChange} 
        />
        <span>$3,99.00</span>
      </div>
      <div>
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
        <div>
          <Paypal product={product} />
        </div>
      )}
    </div>
  );
};

export default Donate;