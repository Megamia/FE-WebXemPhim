import React, { useEffect, useState } from 'react';
import Header from '../../Header&Footer/Header/Header';
import Footer from '../../Header&Footer/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import axios from 'axios';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    navigate('/Home');
  };

  useEffect(() => {
    document.title = 'Thông tin cá nhân';

  }, []);
  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem("isLoggedIn");

    if (storedLoggedInStatus === "true") {
      setIsLoggedIn(true);
    }

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.get("http://localhost:4000/api/profile", {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
        .then(response => {
          setUser(response.data.userInfo);
          setUsername(response.data.userInfo.username);
          setFullname(response.data.userInfo.fullname);
          setEmail(response.data.userInfo.email);
          setPhone(response.data.userInfo.phone);
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, []);
  const handleUpdate = () => {
    axios.post('http://localhost:4000/api/profile', {
      username: username,
      fullname: fullname,
      email: email,
      phone: phone
    })
      .then(response => {
        console.log('Thông tin đã được cập nhật thành công:', response.data);
        alert("Sửa thông tin thành công");
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật thông tin:', error);
        alert("Sửa thông tin thất bại");
      });

  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col mt-[100px] p-[35px]">
        <div className='flex flex-row flex-1'>
          <div className="flex flex-col w-[300px] px-[20px]">
            <div className="flex flex-col items-center mb-[30px]">
              <img src="../../img/AVT/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="?" className="w-[50%]" />
              <div className='flex text-black'>
                {fullname}
              </div>
              <div className='flex text-black'>
                {email}
              </div>
            </div>
            <div className='px-[60px]'>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
              <div className='flex flex-row items-center'>
                <FaUser className='mr-[10px]' /> Profile
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 '>
            <p className="hover:underline text-xl font-bold">
              Cài đặt profile
            </p>
            <div className='flex flex-col flex-1 py-[30px]'>
              <div className="flex flex-col flex-1 bg-white px-[60px] border-none ">
                <div className="flex justify-between py-[16px]">
                  <div className="flex flex-1 flex-row items-center">
                    <span className="text-xl font-semibold mr-[30px] w-[130px]">Username</span>
                    <input
                      type="input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border-[2px] border-gray-300 focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between py-[16px]">
                  <div className="flex flex-1 flex-row items-center">
                    <span className="text-xl font-semibold mr-[30px] w-[130px]">Fullname</span>
                    <input
                      type="input"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="border-[2px] border-gray-300 focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between py-[16px]">
                  <div className="flex flex-1 flex-row items-center">
                    <span className="text-xl font-semibold mr-[30px] w-[130px]">Email</span>
                    <input
                      type="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-[2px] border-gray-300 focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between py-[16px]">
                  <div className="flex flex-1 flex-row items-center">
                    <span className="text-xl font-semibold mr-[30px] w-[130px]">Số điện thoại</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-[2px] border-gray-300 focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly " >
          <button onClick={handleUpdate}>
            <div className='bg-[#EF4444] p-[10px] rounded-full border border-solid border-red-500 text-white font-bold hover:bg-[#3EA6FF]'>
              Lưu thông tin
            </div>
          </button>
          <button onClick={handleLogout}>
            <div className='bg-[#EF4444] p-[10px] rounded-full border border-solid border-red-500 text-white font-bold hover:bg-[#3EA6FF]'>
              Đăng xuất
            </div>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
