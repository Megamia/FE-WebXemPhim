import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import "./style.css";
import axios from "axios";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [moviename, setmoviename] = useState([]);

  const isLoggedIn = document.cookie.includes("token=");
  const handleVideoClick = (event) => {
    event.preventDefault();
    const videoUrl = event.currentTarget.getAttribute("href");
    window.location.href = videoUrl;
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/find?search=${searchTerm}`
      );
      const names = response.data.names.map((item) => item.moviename);
      setSearchResults(names);
      console.log("Tìm được tên phim");
      // Tiếp tục xử lý tên tìm được ở đây
    } catch (error) {
      console.error(error);
      console.log("Không được tên phim");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value.trim();
      if (inputValue !== "") {
        handleSearchSubmit(event);
      }
    }
  };
const clickcc = () =>{
  alert("Xem thêm cc");
}
  // const handleLogin = () => {
  //     setIsLoggedIn(true);
  //     localStorage.setItem('isLoggedIn', true);
  // };

  // const handleLogout = () => {
  //     setIsLoggedIn(false);
  //     localStorage.removeItem('isLoggedIn');
  // };
  // useEffect(() => {
  //     const loggedInStatus = localStorage.getItem('isLoggedIn');
  //     if (loggedInStatus) {
  //         setIsLoggedIn(true);
  //     }
  // }, []);
  const handleLoginClick = () => {
    window.scrollTo(0, 300);
  };

  return (
    <div className="w-full relative bg-black flex justify-center ">
      <div className="flex items-center h-[100px] top-0 z-50 bg-black w-full md:max-w-[1350px]">
        <NavLink
          to="/#"
          className="h-full w-[100px] flex items-center justify-center ml-[40px] mr-[40px]"
        >
          <div className="flex justify-center h-[85%]">
            <img
              src="../../img/logoPage.png"
              alt="logo"
              className="h-auto max-h-[100%]"
            />
          </div>
        </NavLink>

        <div className=" hidden md:flex justify-center flex-1 h-[100%] ">
          <button className="w-1/5">
            <NavLink to="/#" className="text-white text-2xl ">
              Trang chủ
            </NavLink>
          </button>

          <button className={`w-1/5  ${styles.menu}`}>
            <NavLink to="/phim-moi" className="text-white text-2xl ">
              Top phim
            </NavLink>
            <div className={styles.submenu}>
              <ul className="bg-white  ">
                <li>
                  <button className=" ">
                    <NavLink to="/" className="">
                      Theo năm
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className="  ">
                    <NavLink to="/" className="">
                      Theo mùa thu năm ấy
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <NavLink to="/" className="">
                      Theo ngày
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className="">
                    <NavLink to="/danh-muc/phim-bo" className="">
                      Phim Bộ
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className="  ">
                    <NavLink to="/danh-muc/phim-le" className="">
                      Phim Lẻ
                    </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </button>

          <button className={`w-1/5  ${styles.menu}`}>
            <NavLink to="/" className="text-white text-2xl ">
              Thể loại
            </NavLink>
            <div className={styles.submenu}>
              <ul className="bg-white  ">
                <li>
                  <button className=" ">
                    <a
                      className=""
                      href={process.env.PUBLIC_URL + "/img/cut.mp4"}
                      onClick={handleVideoClick}
                    >
                      Luận loan
                    </a>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <a
                      className=""
                      href={process.env.PUBLIC_URL + "/img/sad.mp4"}
                      onClick={handleVideoClick}
                    >
                      Hentai
                    </a>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <a
                      className=""
                      href={process.env.PUBLIC_URL + "/img/sadboiz.mp4"}
                      onClick={handleVideoClick}
                    >
                      Sẽ gầy
                    </a>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <NavLink to="/the-loai/drama" className="">
                      Drama
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <NavLink to="/the-loai/action" className="">
                      Action
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <NavLink to="/the-loai/adventure" className="">
                      Adventure
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button className=" ">
                    <NavLink to="/the-loai/fantasy" className="">
                      Fantasy
                    </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </button>

          <button className="w-1/5">
            <NavLink to="/ExPage" className="text-white text-2xl">
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
            value={searchTerm}
            onKeyDown={handleKeyDown}
            onChange={handleSearchChange}
            className="w-full rounded-full px-4 py-2 z-10 relative border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
          />
          {searchResults && (
            <div className="submenu">
              <ul>
                {searchResults.slice(0, 5).map((name, index) => (
                  // HIỂN THỊ TOÀN BỘ NAME //          {searchResults.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
                {searchResults.length > 0 && (
        <div className="flex justify-center items-center p-[10px] bg-[#B5E745] text-black font-bold cursor-pointer hover:bg-[#A2D63A]">
          {/* <button>
            <NavLink> Xem thêm</NavLink>
          </button> */}
          <button onClick={clickcc}>
            <NavLink> Xem thêm</NavLink>
          </button>
        </div>
      )}
              </ul>
            </div>
          )}
        </div>

        <div className="block md:hidden">
          <button className="flex items-center justify-center bg-transparent p-1 rounded-md ml-6 md:ml-0 md:absolute md:right-4 md:top-4 text-white">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>
        {isLoggedIn ? (
          <NavLink
            to="/ProfileCHA"
            className="hidden md:flex md:items-center text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center"
            activeClassName="hidden"
          >
            <FontAwesomeIcon icon={faUserCheck} className="text-2xl" />
          </NavLink>
        ) : (
          <NavLink
            to="/Login"
            className="hidden md:flex md:items-center bg-red-600 hover:bg-gray-600 text-white font-bold rounded-md mr-[3.5%] ml-[3.5%] justify-center w-[150px] h-[40px]"
            activeClassName="hidden "
            onClick={handleLoginClick}
          >
            <span className="mx-auto">Đăng Nhập</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
