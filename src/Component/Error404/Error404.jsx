import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="error-container flex flex-col items-center">
        <div>
          <img src="./img/404.jpg" alt="Error 404" className="error-image" />
        </div>
        <NavLink
          to="/"
          className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors duration-300"
        >
          Go back to homepage
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;