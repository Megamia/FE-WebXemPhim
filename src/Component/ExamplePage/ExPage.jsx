import React from "react";
import { NavLink } from "react-router-dom";

const ExPage = () => {
    return (
        <div className="w-full min-h-full bg-neutral-900">
            <div className="w-auto h-[550px] ml-[50px] mr-[50px] bg-blue-800 pt-[20px] ">           {/* Sửa ở đây*/}
                <div className=" w-auto h-[100px] ml-[25px] mr-[25px] bg-red-800 mb-[20px] ">       {/* Sửa ở đây*/}
                    <span>abc</span>
                </div>
                <div className="w-auto h-[100px] ml-[25px] mr-[25px] bg-red-800 mb-[20px] ">        {/* Sửa ở đây*/}
                    <span>abc</span>
                </div>
                <div className="w-auto h-[100px] ml-[25px] mr-[25px] bg-red-800 mb-[20px] ">        {/* Sửa ở đây*/}
                    <span>abc</span>
                </div>
                <div className="w-auto h-[100px] ml-[25px] mr-[25px] bg-red-800 mb-[25px] ">        {/* Sửa ở đây*/}
                    <span>abc</span>
                </div>
                <NavLink
                    to="/Home"
                    className="w-[400px]  px-6 py-3 bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors duration-300"
                >
                    Go back to homepage
                </NavLink>
            </div>

        </div>
    );
};
export default ExPage;