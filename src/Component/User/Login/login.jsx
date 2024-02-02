import React, { useState, useEffect } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import axios from "axios";
import Header from "../../Header&Footer/Header/Header";
import Footer from "../../Header&Footer/Footer/Footer";
import Notification from "../../Notification/Nontification";

const Login = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        username: User,
        password: Password
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        setShowNotification(true);
        return;
      }

      setIsLoggedIn(false);
      setShowNotification(true);
    } catch (error) {
      console.log('Error querying the database:', error);
      setIsLoggedIn(false);
      setShowNotification(true);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
    if (isLoggedIn) {
      navigate("/Profile");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="bg-[#263238]">
        <Header />
        <div className="bg-[#253238] flex  justify-center">
          <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
            <Notification />

            <div className=" flex items-center justify-center bg-[#263238]">
              <form
                onSubmit={handleLogin}
                className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] rounded-xl"
              >
                <div className="flex flex-col justify-center w-[80%]">
                  <div className="font-bold text-[30px] justify-center flex mb-[10px] text-white">
                    ĐĂNG NHẬP
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={User}
                    onChange={handleUserChange}
                    placeholder="Tên đăng nhập..."
                    className="inputUser border-gray-300 text-black"
                  />
                  <input
                    type="password"
                    id="password"
                    value={Password}
                    onChange={handlePasswordChange}
                    placeholder="Mật khẩu..."
                    className="inputUser border-gray-300 text-black"
                  />
                  <div className="  flex justify-center ">
                    <button className="w-1/2 bg-red-500 text-white rounded-lg my-[2px] py-[10px]">
                      <p className="">Đăng nhập</p>
                    </button>
                  </div>
                  <p className="flex justify-center text-white">
                    Bạn chưa có tài khoản?{" "}
                    <NavLink to="/Signup" className="text-red-600">
                      Đăng ký
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
            {showNotification && (
              <NotificationModal
                title={isLoggedIn ? "Đăng nhập thành công" : "Đăng nhập thất bại"}
                message={
                  isLoggedIn
                    ? "Đăng nhập thành công"
                    : "Sai tài khoản hoặc mật khẩu"
                }
                onClose={closeNotification}
              />
            )}
          </div>
        </div>
        {/* <Catalog/> */}
        <div className="w-full  mt-[20px] ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;