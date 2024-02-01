import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";

  
const Error404 = () => {
  useEffect (() => {
    document.title = "Lỗi truy cập";
  },[]);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen w-[100%]">
      <div className="error-container flex flex-1 flex-col items-center  w-[100%]">
        <div className="relative z-2">
          <img src="./img/404.png" alt="Error 404" className="error-image w-[100%] h-[100vh]" />
        </div>
        <NavLink
          to="/Home"
          className="absolute z-10 bottom-0 left-[40%]  px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors duration-300"
        >
          Go back to homepage
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;