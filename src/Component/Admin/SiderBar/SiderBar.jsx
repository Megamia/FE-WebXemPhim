import React, { useState } from "react";
import Home from "../../Home/Home";
import UserMNGM from "../UserMNGM/UserMNGM";
import styles from "./style.module.scss";
const SiderBar = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const renderPage = () => {
        switch (currentPage) {
            case "Profile":
                return <Home />;
            case "SiderBar":
                return <Home />;
            case "Page2":
                return <Home />;
            case "UserMNGM":
                return <UserMNGM />;
            default:
                return null;
        }
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="flex flex-row flex-1 h-screen">
            <div className="flex flex-col w-[300px] px-[30px] py-[50px]">
                <div className="flex justify-center items-center">
                    <img
                        src="../../img/AVT/03ebd625cc0b9d636256ecc44c0ea324.jpg"
                        alt="?"
                        className="w-[70%] h-auto"
                    />
                </div>
                <div>
                    <ul className="flex flex-1 flex-col gap-[10px]">
                        <li className={`${currentPage === "Profile" ? styles.active : ""
                            } `}
                            onClick={() => handlePageChange("Profile")}> Movie</li>
                        <li className={`${currentPage === "SiderBar" ? styles.active : ""
                            }  `}
                            onClick={() => handlePageChange("SiderBar")}> Donate</li>
                        <li className={`${currentPage === "Page2" ? styles.active : ""
                            }   `}
                            onClick={() => handlePageChange("Page2")}>Type</li>
                        <li className={`${currentPage === "UserMNGM" ? styles.active : ""
                            }  `}
                            onClick={() => handlePageChange("UserMNGM")}>UserMNGM</li>

                    </ul>


                </div>
            </div >
            <div className="flex flex-1 flex-col ">
                <div className="h-[100px]">
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