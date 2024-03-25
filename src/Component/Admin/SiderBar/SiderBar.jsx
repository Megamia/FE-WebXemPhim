import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import UserAD from "../UserAD/UserAD";
import Test from "../../Test/Test";
import styles from "./style.module.scss";
import "./style.css";
import MovieAD from "../Movie/MovieAD";
const SiderBar = () => {
    const navigate= useNavigate();
    const [currentPage, setCurrentPage] = useState("Movie");
    const renderPage = () => {
        switch (currentPage) {
            case "Movie":
                return <MovieAD />;
            case "SiderBar":
                return <UserAD />;
            case "Test":
                return <Test />;
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
    const BackHome = () =>{
        navigate("/Home");
    }
    return (
        <div className="flex flex-row flex-1 h-screen bg-[#263238] text-white">
            <div className="flex flex-col w-[300px] border-r-white border-r-[2px]">
                <div className="flex justify-center items-center pt-[50px]">
                    <img
                        src="../../img/AVT/03ebd625cc0b9d636256ecc44c0ea324.jpg"
                        alt="?"
                        className="w-[70%] h-auto"
                    />
                </div>
                <div className="render">
                    <ul className="flex flex-1 flex-col">
                        <li className={`${currentPage === "Movie" ? styles.active : ""
                            } `}
                            onClick={() => handlePageChange("Movie")}> Movie</li>
                        <li className={`${currentPage === "SiderBar" ? styles.active : ""
                            }  `}
                            onClick={() => handlePageChange("SiderBar")}> Donate</li>
                        <li className={`${currentPage === "Test" ? styles.active : ""
                            }   `}
                            onClick={() => handlePageChange("Test")}>Test</li>
                        <li className={`${currentPage === "UserAD" ? styles.active : ""
                            }  `}
                            onClick={() => handlePageChange("UserAD")}>Management User</li>
                        <li 
                            onClick={(BackHome)}> Home</li>
                    </ul>
                </div>
            </div >
            <div className="flex flex-1 flex-col ">
                <div className="h-[100px] border-b-[2px] border-b-white pt-[20px] pl-[35px]">
                    <span>Hello Admin</span>
                </div>
                <div className="flex flex-1">
                    {renderPage()}
                </div>
            </div>
        </div>
    )
}
export default SiderBar;