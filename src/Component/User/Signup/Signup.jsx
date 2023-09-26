import React, {useEffect} from "react";
import { useState } from "react";
import './signup.css';
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    useEffect (() => {
        document.title = "Đăng kí";
      },[]);

    return (
        <div className="w-[100%] flex items-center justify-center h-screen bg-slate-600">
            <form className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] bg-white rounded-xl">
                <div className="flex flex-col justify-center w-[80%]">
                    <div className="font-semibold text-2xl">Đăng Ký</div>
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
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={email}
                        className="inputUser"
                        placeholder="Username..."
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
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
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        className="inputUser"
                        placeholder="Phone..."
                        onChange={(e) => setPhone(e.target.value)}
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