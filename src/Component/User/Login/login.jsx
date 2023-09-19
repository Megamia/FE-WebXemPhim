import React, { useState } from "react";

const Login = () => {
    const [User, setUser] = useState();
    const [Password, setPassword] = useState();
    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Ở đây, bạn có thể thực hiện xử lý đăng nhập, ví dụ: gọi API, kiểm tra thông tin người dùng, vv.
        console.log("Đăng nhập với username:", User, "và password:", Password);
    };
    return (
        <div className="w-[100%] h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="border-gray-300 border-2 w-[400px] h-[100px]">
                <div className=" ">
                    <div>
                        <label htmlFor="username" className="w-100px border-blue-600 border-2">
                            Tên đăng nhập:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={User}
                            onChange={handleUserChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className=" border-blue-600 border-2">
                            Mật khẩu:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={Password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <button type="submit" className="border-gray-600 border-2">Đăng nhập</button>
            </form>
        </div>
    );
};
export default Login;