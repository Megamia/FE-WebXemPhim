import React, { useState } from "react";
import { FaRegBookmark,FaBookmark } from "react-icons/fa";

const Test1 = () => {
  const [active, setActive] = useState("");
  const click = () => {
    setActive(!active);
    console.log(!active);
  };
  return (
    <div className="flex justify-center items-center text-black h-screen gap-[30px]">
      {active ? (
        <FaRegBookmark onClick={click}/>
      ) : (
        <FaBookmark className="fill-red-500" onClick={click}/>
      )}
    </div>
  );
};
export default Test1;
