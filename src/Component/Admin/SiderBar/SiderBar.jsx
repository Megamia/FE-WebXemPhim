import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import UserAD from "../UserAD/UserAD";
import Test from "../../Test/Test";
import MovieAD from "../MovieAD/MovieAD";
import DonateAD from "../DonateAD/DonateAD";
import styles from "./style.module.scss";
import "./style.css";
import Cookies from "js-cookie";
import axios from "axios";

const SiderBar = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState("Movie");
  const renderPage = () => {
    switch (currentPage) {
      case "Donate":
        return <DonateAD />;
      case "SiderBar":
        return <UserAD />;
      case "Movie":
        return <MovieAD />;
      case "UserAD":
        return <UserAD />;
      case "Home":
        return <Home />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData=async()=>{
    const storedToken = Cookies.get("token");
    if (storedToken) {
      axios
        .get("http://localhost:4000/api/profile", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const userInfo = response.data.userInfo;
            const isAdmin = userInfo.isAdmin;

            if (isAdmin) {
              setIsAdmin(isAdmin);
              // alert("Chào mừng admin");
            } else {
              alert("Bạn không có quyền truy cập vào trang này!");
              navigate("/Home");
            }
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        });
    } else {
      alert("Bạn phải đăng nhập trước");
      navigate("/Home");
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const BackHome = () => {
    navigate("/Home");
  };
  return (
    <div className={`w-full flex justify-center bg-black min-h-screen `}>
      {isAdmin ? (
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
              <ul className="flex flex-1 flex-col cursor-pointer">
                <li
                  className={`${
                    currentPage === "Movie" ? styles.active : ""
                  } `}
                  onClick={() => handlePageChange("Movie")}
                >
                  Movie
                </li>
                <li
                  className={`${
                    currentPage === "SiderBar" ? styles.active : ""
                  }  `}
                  onClick={() => handlePageChange("SiderBar")}
                >
                  SiderBar
                </li>
                <li
                  className={`${
                    currentPage === "Donate" ? styles.active : ""
                  }   `}
                  onClick={() => handlePageChange("Donate")}
                >
                  Donate
                </li>
                <li
                  className={`${
                    currentPage === "UserAD" ? styles.active : ""
                  }  `}
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
      ) : (
        <img src="/img/mêm.jpg" alt="Sếck" />
      )}
    </div>
  );
};
export default SiderBar;
