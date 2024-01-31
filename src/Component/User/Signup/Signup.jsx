import React, { useEffect, useState } from "react";
import './signup.css';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    useEffect(() => {
        document.title = "Đăng ký";
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/signup', {
                username,
                fullname,
                email,
                password,
                phone,
            });

            console.log('Signup successful:', response.data);
            alert('Đăng kí thành công');
            window.location.href='/login';

        } catch (error) {
            console.error('Error signing up:', error);
            // Xử lý lỗi đăng ký
            alert('Người dùng đã tồn tại');
        }
    };

    return (
        <div className="w-[100%] flex items-center justify-center h-screen bg-slate-600">
            <form className="flex justify-center w-[200px] md:w-[400px] lg:w-[600px] h-[600px] bg-white rounded-xl" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center w-[80%]">
                    <div className="font-semibold text-2xl flex justify-center mb-[10px]">Đăng Ký</div>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={fullname}
                        className="inputUser"
                        placeholder="Tên đầy đủ"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        className="inputUser"
                        placeholder="Tên tài khoản"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        className="inputUser"
                        placeholder="Mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        className="inputUser"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        className="inputUser"
                        placeholder="Số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <button type="submit" className="p-[10px] bg-red-600 text-white rounded-lg my-[10px]">Đăng ký</button>
                    <p className="flex justify-center">Bạn đã có tài khoản? <NavLink to='/Login' className="text-red-600">Đăng nhập</NavLink></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;