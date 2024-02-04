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
    navigate('/Home'); 
  };

  useEffect(() => {
    document.title = 'Thông tin cá nhân';
    const isLoggedInFromSession = sessionStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedInFromSession === 'true');

    const userFromSession = sessionStorage.getItem('user');
    if (userFromSession) {
      setUser(JSON.parse(userFromSession));
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/profile", {
          withCredentials: true
        });
        setUser(response.data);
        setFullname(response.data.fullname);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.log('Error fetching user info:', error);
      }
    };
    
    fetchUserInfo();
  }, []);
  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem("isLoggedIn");

    if (storedLoggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  

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
          <div className="mb-4">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">Tên đăng nhập</h3>
                  <input
                    type="text"
                    value={fullname}

                    className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">Tên đăng nhập</h3>
                  <input
                    type="text"
                    value={fullname}


                    className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">Tên đăng nhập</h3>
                  <input
                    type="text"
                    value={fullname}

                    className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">Tên đăng nhập</h3>
                  <input
                    type="text"
                    value={fullname}


                    className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                  />
                </div>
              </div>
            </div>
            
            
          </div>
          <div className=' flex justify-between w-[300px]'>
              <button onClick={""}>Lưu Thông tin</button>
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