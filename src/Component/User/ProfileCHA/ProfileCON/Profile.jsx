import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPage, setCurrentPage] = useState("Profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/Home");
  };

  useEffect(() => {
    document.title = "Thông tin cá nhân";
  }, []);
  useEffect(() => {
    // const storedLoggedInStatus = localStorage.getItem("isLoggedIn");

    // if (storedLoggedInStatus === "true") {
    //   setIsLoggedIn(true);
    // }

    const storedToken = Cookies.get("token");
    if (storedToken) {
      axios
        .get("http://localhost:4000/api/profile", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setUser(response.data.userInfo);
          setUsername(response.data.userInfo.username);
          setFullname(response.data.userInfo.fullname);
          setEmail(response.data.userInfo.email);
          setPassword(response.data.userInfo.password);
          setPhone(response.data.userInfo.phone);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, []);
  const handleUpdate = () => {
    const storedToken = Cookies.get("token");
    axios
      .post(
        "http://localhost:4000/api/profile",
        {
          username: username,
          fullname: fullname,
          email: email,
          password: password,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      )
      .then((response) => {
        console.log("Thông tin đã được cập nhật thành công:", response.data);
        alert("Sửa thông tin thành công");
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thông tin:", error);
        alert("Sửa thông tin thất bại");
      });
  };
  return (
    <div className="flex flex-col flex-1 px-[35px] bg-white">
      <div className="flex flex-row ">
        <div className="main flex flex-col ">
          <div>
            <span className="hover:underline text-xl font-bold">
              Cài đặt profile
            </span>
          </div>
          <div className="flex flex-row py-[30px]">
            <div className="flex flex-col flex-1 bg-white px-[60px] border-none ">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-1 flex-row items-center">
                  <span className="text-xl font-semibold mr-[30px] w-[130px]">
                    Fullname
                  </span>
                  <input
                    type="input"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="border-[2px] border-[#40BABD] focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                  />
                </div>
              </div>
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-1 flex-row items-center">
                  <span className="text-xl font-semibold mr-[30px] w-[130px]">
                    Email
                  </span>
                  <input
                    type="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[2px] border-[#40BABD] focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                  />
                </div>
              </div>

              <div className="flex justify-between py-[16px]">
                <div className="flex flex-1 flex-row items-center">
                  <span className="text-xl font-semibold mr-[30px] w-[130px]">
                    Số điện thoại
                  </span>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-[2px] border-[#40BABD] focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex1">
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-1 flex-row items-center">
                  <span className="text-xl font-semibold mr-[30px] w-[130px]">
                    Username
                  </span>
                  <input
                    type="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-[2px] border-[#40BABD] focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                  />
                </div>
              </div>
              <div className="flex justify-between py-[16px]">
                <div className="flex flex-1 flex-row items-center">
                  <span className="text-xl font-semibold mr-[30px] w-[130px]">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-[2px] border-[#40BABD] focus:outline-none py-[5px] px-[10px] flex flex-1 rounded-[5px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly ">
        <button onClick={handleUpdate}>
          <div className="bg-[#EF4444] p-[10px] rounded-full border border-solid border-red-500 text-white font-bold hover:bg-[#3EA6FF]">
            Lưu thông tin
          </div>
        </button>
        <button onClick={handleLogout}>
          <div className="bg-[#EF4444] p-[10px] rounded-full border border-solid border-red-500 text-white font-bold hover:bg-[#3EA6FF]">
            Đăng xuất
          </div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
