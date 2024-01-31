import React, { useState, useEffect } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import axios from "axios";
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
            const response = await axios.get('http://localhost:4000/api/data');
            const users = response.data;
            const user = users.find((user) => user.username === User);

            if (user && user.password === Password) {
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
            <div className="w-[100%] flex items-center justify-center h-screen bg-slate-600">
                <form
                    onSubmit={handleLogin}
                    className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] bg-white rounded-xl"
                >
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="font-semibold text-2xl justify-center flex mb-[10px]">Đăng nhập</div>
                        <input
                            type="text"
                            id="username"
                            Expand Down
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
                        <p className="flex justify-center">
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
        </>
    );
};
export default Login;