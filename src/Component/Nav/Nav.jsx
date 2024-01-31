import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Payment from './../Payment/Payment';
import Detail from './../Detail/Detail';

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="w-full relative">
            <div className="flex items-center h-[100px] top-0 z-50 bg-black ">
                <NavLink to="/Home" className="h-full w-[100px] flex items-center justify-center ml-[40px] mr-[40px]">
                    <div className="flex justify-center h-[85%]">
                        <img src="./img/logoPage.png" alt="logo" className="h-auto max-h-[100%]" />
                    </div>
                </NavLink>

                <div className=" hidden md:flex justify-center flex-1 ">

                    <div className="w-1/5">
                        <NavLink to="/Home" className="text-white text-2xl ">
                            Trang chủ
                        </NavLink>
                    </div>

                    <div className="w-1/5">
                        <NavLink to="/Error404" className="text-white text-2xl ">
                            Top phim
                        </NavLink>
                    </div>

                    <div className="w-1/5">
                        <NavLink to="/Error404" className="text-white text-2xl ">
                            Thể loại
                        </NavLink>
                    </div>

                    <div className="w-1/5">
                        <NavLink to="/Error404" className="text-white text-2xl">
                            Thư viện
                        </NavLink>
                    </div>

                    <div className="w-1/5">
                        <NavLink to="/Hometest" className="text-white text-2xl ">
                            Donate
                        </NavLink>
                    </div>

                </div>
                <div className="w-1/2  sm:w-1/4">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Tìm kiếm: Tên Việt, tên Nhật, ...."
                        className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                    />
                </div>

                <div className="block md:hidden">
                    <button className="flex items-center justify-center bg-transparent p-1 rounded-md ml-6 md:ml-0 md:absolute md:right-4 md:top-4 text-white">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12h18M3 6h18M3 18h18"></path>
                        </svg>
                    </button>
                </div>
                {isLoggedIn ? (
                    <NavLink
                        to="/Login"
                        className="hidden md:flex md:items-center bg-red-600 hover:bg-gray-600 text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center w-[150px] h-[40px]"
                        activeClassName="hidden"
                    >
                        <span className="mx-auto">Đăng Nhập</span>
                    </NavLink>
                ) : (
                    <NavLink
                        to="/Profile"
                        className="hidden md:flex md:items-center text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center"
                        onClick={handleLogin}
                    >
                        <FontAwesomeIcon icon={faUserCheck} className="text-2xl" />
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Nav;