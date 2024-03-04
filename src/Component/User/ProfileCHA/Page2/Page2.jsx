import React from 'react';
import './Page2.css';
const Page2 = () => {


  return (
    <div className='flex justify-center items-center text-black h-screen'>
      <div class="star-rating">
        <div class="stars">
          <label class="number"><input type="radio" name="rating" value="0"/></label>
          <label class="star"><input type="radio" name="rating" value="1"/></label>
          <label class="star"><input type="radio" name="rating" value="2"/></label>
          <label class="star"><input type="radio" name="rating" value="3"/></label>
          <label class="star"><input type="radio" name="rating" value="4"/></label>
          <label class="star"><input type="radio" name="rating" value="5"/></label>
          <div class="number-rating"></div>
        </div>
      </div>
    </div>
  );
};

export default Page2;