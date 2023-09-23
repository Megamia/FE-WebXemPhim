import React from "react";
import { useState } from "react";
import './signup.css';
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Thực hiện xử lý đăng ký tại đây
    };
    return (
        <div className="w-[100%] flex items-center justify-center h-screen bg-slate-600">
            <form className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] bg-white rounded-xl">
                <div className="flex flex-col justify-center w-[80%]">
                    <div className="font-semibold text-2xl">Đăng Ký</div>
                    <label htmlFor="name" className="text-left">Họ và tên:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className="inputUser"
                        placeholder="Họ và tên người dùng..."
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className="text-left">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        className="inputUser"
                        placeholder="Email..."
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="text-left">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        className="inputUser"
                        placeholder="Mật khẩu..."
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="p-[10px] bg-red-600 text-white rounded-lg my-[10px]">Đăng ký</button>
                    <p>Bạn đã có tài khoản? <NavLink to='/Login' className="text-red-600">Đăng nhập</NavLink></p>
                </div>
            </form>
        </div>
    );
};
export default Signup;