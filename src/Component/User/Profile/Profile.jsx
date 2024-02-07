import React, { useEffect, useState } from 'react';
import Header from '../../Header&Footer/Header/Header';
import Footer from '../../Header&Footer/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
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
      // alert(`Token: ${storedToken}`);
      axios.get("http://localhost:4000/api/profile", {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
        .then(response => {
          setUser(response.data.userInfo);
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
    // Gọi API để cập nhật thông tin người dùng
    axios.post('http://localhost:4000/api/profile', {
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
      <div className="flex mt-[100px]">
        <aside className="bg-white p-4 m-4 h-screen w-1/4 border-none">
          <ul>
            <li className="mb-4">
              <a href="/profile-settings" className="hover:underline">
                Cài đặt profile
              </a>
            </li>
          </ul>
        </aside>
        <main className="p-4 w-3/4">
          <div className="bg-white p-6 border-none ">
            {/* <div className="flex justify-between py-[16px]">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Tên tài khoản</h3>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                />
              </div>
            </div> */}
            <div className="flex justify-between py-[16px]">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Họ và tên</h3>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                />
              </div>
            </div>
            <div className="flex justify-between py-[16px]">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Email</h3>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                />
              </div>
            </div>
            <div className="flex justify-between py-[16px]">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Số điện thoại</h3>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                />
              </div>
            </div>

          </div>
          <div className=' flex justify-between w-[300px]'>
            <button onClick={handleUpdate}>Lưu Thông tin</button>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
