import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosSwap } from "react-icons/io";
const UserAD = () => {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPasswod] = useState(false);

  const show = (userId) => {
    const clickedUser = users.find((user) => user.userid === userId);
    if (clickedUser) {
      clickedUser.showPassword = !clickedUser.showPassword;
      setUsers([...users]);
    }
  };
  const swapRole=()=>{
    alert("Change success");
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/UserMNGM`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error retrieving users:", error);
      }
    };

    fetchUsers();
  }, []);
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you want to remove this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this user!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/UserMNGM/${userId}`
        );
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.userid !== userId)
        );
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          text: "User has been safe for now.",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="flex flex-col flex-1 p-5  bg-white ">
      <span className="text-[35px] text-black">
        Các tài khoản của người dùng
      </span>
      <div className="flex flex-row flex-1 mt-[20px]">
        <div className="main flex flex-col flex-1">
          <div className="flex flex-1 flex-row justify-between  text-[25px] text-black ">
            <div className="flex flex-col  ">
              <span>Username</span>
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px]">
                    {user.username}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Fullname</span>
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px]">
                    {user?.fullname !== null && user?.fullname !== ""
                      ? user?.fullname
                      : "No data"}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Email</span>
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px]">
                    {user?.email !== null && user?.email !== ""
                      ? user?.email
                      : "No data"}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Password</span>
              <div className="text-[15px]">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px] gap-[10px]">
                    {user.username === "admin" ? (
                      <p>{user.password}</p>
                    ) : (
                      <div className="flex flex-row items-center">
                        {user.showPassword ? (
                          <span className="flex flex-1">{user.password}</span>
                        ) : (
                          <span className="flex flex-1">********</span>
                        )}
                        {user.showPassword ? (
                          <FaEye
                            onClick={() => show(user.userid)}
                            className="cursor-pointer"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={() => show(user.userid)}
                            className="cursor-pointer"
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Phone</span>
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px]">
                    {user?.phone !== null && user?.phone !== ""
                      ? user?.phone
                      : "No data"}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Role</span>
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div
                    key={user?.userid}
                    className="py-[10px] flex flex-row items-center gap-[10px]"
                  >
                    <p className="flex flex-1">
                      {user?.role !== null && user?.role !== ""
                        ? user?.role
                        : "No data"}
                    </p>
                    <IoIosSwap onClick={swapRole} className="cursor-pointer"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Chỉnh sửa</span>
              <div className="text-[15px] flex flex-col">
                {users.map((user) =>
                  user.username !== "admin" ? (
                    <button
                      key={user.userid}
                      onClick={() => handleDeleteUser(user.userid)}
                      className="py-[10px]"
                    >
                      <div className="w-[100%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-black rounded hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors duration-300">
                        Xóa
                      </div>
                    </button>
                  ) : (
                    <p className="py-[10px] flex justify-center">
                      Can't delete
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAD;
