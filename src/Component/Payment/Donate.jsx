import React, { useState } from 'react';
import Paypal from './Paypal';

const Donate = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log('Selected value:', event.target.value);
  };
  

  return (
    <div>
      <div>
        <input type="radio" name="amount" value="10" onChange={handleRadioChange} /> $10
        <br />
        <input type="radio" name="amount" value="20" onChange={handleRadioChange} /> $20
        <br />
        <input type="radio" name="amount" value="50" onChange={handleRadioChange} /> $50
      </div>
      <Paypal selectedOption={selectedValue} />

    </div>
  );
};

export default Donate;
