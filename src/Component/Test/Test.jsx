import React, { useState } from 'react';
import { ButtonHome } from './ButtonHome/ButtonHome';


const Test = () => {


  return (
    <div className='flex justify-center items-center text-black h-screen'>
      <span className='text-[30px] font-bold'>
        Hello world
      </span>
      <ButtonHome/>
    </div>
  );
};

export default Test;