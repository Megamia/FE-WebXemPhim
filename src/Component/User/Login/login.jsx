import React, { useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";

const Login = () => {
    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (User === "admin" && Password === "123") {
            setIsLoggedIn(true);
        } else {
            setShowNotification(true);
            console.log("Tài khoản hoặc mật khẩu không chính xác");
        }
    };

    const closeNotification = () => {
        setShowNotification(false);
    };

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className="w-[100%] flex items-center justify-center h-screen bg-slate-600">
                <form
                    onSubmit={handleLogin}
                    className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] bg-white rounded-xl"
                >
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="font-semibold text-2xl">Đăng nhập</div>
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
                        <button className="p-[10px] bg-red-600 text-white rounded-lg my-[10px]">
                            Đăng nhập
                        </button>
                        <p>
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
                    title="Lỗi đăng nhập"
                    message="Tài khoản hoặc mật khẩu bị nhầm rồi cu em ơi!"
                    onClose={closeNotification}
                />
            )}
        </>
    );
};

export default Login;