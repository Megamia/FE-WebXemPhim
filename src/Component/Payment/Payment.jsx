// import React, { useState } from "react";
// import Paypal from "./Paypal";

// const Payment = ({ onOptionChange }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="h-[500px] flex justify-center items-center flex-col">
//       <div className="flex flex-row justify-between w-[200px]">
//         <label htmlFor="option1">
//           <input
//             type="radio"
//             id="option1"
//             value="100$"
//             checked={selectedOption === "100$"}
//             onChange={handleOptionChange}
//           />
//           100$
//         </label>
//         <br />
//         <label htmlFor="option2">
//           <input
//             type="radio"
//             id="option2"
//             value="200$"
//             checked={selectedOption === "200$"}
//             onChange={handleOptionChange}
//           />
//           200$
//         </label>
//       </div>
//       <Paypal selectedOption={selectedOption} />
//     </div>
//   );
// };

// export default Payment;