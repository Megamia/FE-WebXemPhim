import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import UserAD from "../UserAD/UserAD";
import Test from "../../Test/Test";
import MovieAD from "../MovieAD/MovieAD";
import styles from "./style.module.scss";
import "./style.css";

const SiderBar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("MovieAD");
  const renderPage = () => {
    switch (currentPage) {
      case "Profile":
        return <UserAD />;
      case "SiderBar":
        return <UserAD />;
      case "MovieAD":
        return <MovieAD />;
      case "UserAD":
        return <UserAD />;
      case "Home":
        return <Home />;
      default:
        return null;
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const BackHome = () => {
    navigate("/Home");
  };
  return (
    <div className="w-full flex justify-center bg-black min-h-screen">
      <div className="flex flex-row flex-1 bg-[#263238]  text-white relative max-w-[1600px]">
        <div className="flex flex-col w-[300px] border-r-white border-r-[2px]">
          <div className="flex justify-center items-center pt-[10px]">
            <img
              src="../../img/AVT/03ebd625cc0b9d636256ecc44c0ea324.png"
              alt="?"
              className="w-[20%] h-auto"
            />
          </div>
          <div className="render">
            <ul className="flex flex-1 flex-col">
              <li
                className={`${currentPage === "MovieAD" ? styles.active : ""} `}
                onClick={() => handlePageChange("MovieAD")}
              >
                Movie
              </li>
              <li
                className={`${
                  currentPage === "SiderBar" ? styles.active : ""
                }  `}
                onClick={() => handlePageChange("SiderBar")}
              >
                Donate
              </li>
              <li
                className={`${
                  currentPage === "MovieAD" ? styles.active : ""
                }   `}
                onClick={() => handlePageChange("MovieAD")}
              >
                MovieAD
              </li>
              <li
                className={`${currentPage === "UserAD" ? styles.active : ""}  `}
                onClick={() => handlePageChange("UserAD")}
              >
                Management User
              </li>
              <li onClick={BackHome}> Home</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="h-[100px] border-b-[2px] border-b-white pt-[20px] pl-[35px]">
            <span>Hello Admin</span>
          </div>
          <div className="flex flex-1">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
};
export default SiderBar;
