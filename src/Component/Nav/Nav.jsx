import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
// import Payment from './../Payment/Payment';
// import Detail from './../Detail/Detail';
// import Error404 from './../Error404/Error404';
import styles from './style.module.scss';

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleVideoClick = (event) => {
        event.preventDefault();
        const videoUrl = event.currentTarget.getAttribute('href');
        window.location.href = videoUrl;
    };
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="w-full relative">
            <div className="flex items-center h-[100px] top-0 z-50 bg-black ">
                <NavLink to="/Home" className="h-full w-[100px] flex items-center justify-center ml-[40px] mr-[40px]">
                    <div className="flex justify-center h-[85%]">
                        <img src="./img/logoPage.png" alt="logo" className="h-auto max-h-[100%]" />
                    </div>
                </NavLink>

                <div className=" hidden md:flex justify-center flex-1 h-[100%] ">

                    <button className="w-1/5">
                        <NavLink to="/Home" className="text-white text-2xl ">
                            Trang chủ
                        </NavLink>
                    </button>

                    <button className={`w-1/5  ${styles.menu}`}>
                        <NavLink to="/NewMovie" className="text-white text-2xl ">
                            Top phim
                        </NavLink>
                        <div className={styles.submenu}>
                            <ul className="bg-white w-[100px]  ">
                                <li>
                                    <button className=" w-[100%] flex left-0">
                                        <NavLink to="/UserMNGM" className="">
                                            Theo năm
                                        </NavLink>
                                    </button>
                                </li>
                                <li>
                                    <button className=" w-[100%] flex left-0">
                                        <NavLink to="/Error404" className="">
                                            Theo mùa
                                        </NavLink>
                                    </button>
                                </li>
                                <li>
                                    <button className=" w-[100%] flex left-0">
                                        <NavLink to="/Error404" className="">
                                            Theo ngày
                                        </NavLink>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </button>

                    <button className={`w-1/5  ${styles.menu}`}>
                        <NavLink to="/Error404" className="text-white text-2xl ">
                            Thể loại
                        </NavLink>
                        <div className={styles.submenu}>
                            <ul className="bg-white w-[100px] ">
                                <li>
                                    <button className=" w-[100%] flex left-0">
                                        <a className=""
                                            href={process.env.PUBLIC_URL + '/img/cut.mp4'}
                                            onClick={handleVideoClick}>
                                            Luận loan
                                        </a>
                                    </button>
                                </li>
                                <li>
                                    <button className=" w-[100%] flex left-0" >
                                        <a className=""
                                            href={process.env.PUBLIC_URL + '/img/sad.mp4'}
                                            onClick={handleVideoClick}>
                                            Hentai
                                        </a>
                                    </button>
                                </li>
                                <li>
                                    <button className=" w-[100%] flex left-0">
                                        <a className=""
                                            href={process.env.PUBLIC_URL + '/img/sadboiz.mp4'}
                                            onClick={handleVideoClick}>
                                            Sẽ gầy
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </button>

                    <button className="w-1/5">
                        <NavLink to="/Test" className="text-white text-2xl">
                            Thư viện
                        </NavLink>
                    </button>

                    <button className="w-1/5">
                        <NavLink to="/Donate" className="text-white text-2xl ">
                            Donate
                        </NavLink>
                    </button>

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
                        to="/Profile"
                        className="hidden md:flex md:items-center text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center"
                        activeClassName="hidden"
                    >
                        <FontAwesomeIcon icon={faUserCheck} className="text-2xl" />
                    </NavLink>
                ) : (
                    <NavLink
                        to="/Login"
                        className="hidden md:flex md:items-center bg-red-600 hover:bg-gray-600 text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center w-[150px] h-[40px]"
                        activeClassName="hidden"
                    >
                        <span className="mx-auto">Đăng Nhập</span>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Nav;