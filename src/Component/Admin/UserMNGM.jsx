import React, { useEffect, useState } from "react";
import axios from "axios";

const UserMNGM = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/UserMNGM");
        setUsers(response.data);
      } catch (error) {
        console.error("Error retrieving users:", error);
      }
    };

    fetchUsers();
  }, []);
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/api/UserMNGM/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.userid !== userId)
      );
      alert("User đã bị cho ra đảo thành công");
    } catch (error) {
      alert("User chưa bị cho ra đảo @@", error);
    }
  };

  return (
    <div className="flex flex-col flex-1 px-[35px] bg-[#263238] ">
      <div className="flex flex-row flex-1">
        <div className="main flex flex-col flex-1">
          <div className="flex flex-1 flex-row justify-between text-black text-[25px] text-white ">
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
              <div className="text-[15px] ">
                {users.map((user) => (
                  <div key={user?.userid} className="py-[10px]">
                    {user.password}
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
              <span>Chỉnh sửa</span>
              <div className="text-[15px] flex flex-col">
                {users.map((user) =>
                  user.username !== "admin" ? (
                    <button
                      key={user.userid}
                      onClick={() => handleDeleteUser(user.userid)}
                      className="py-[10px]"
                    >
                      <div className="w-[100%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors duration-300">
                        Xóa
                      </div>
                    </button>
                  ) : (
                    <p className="py-[10px] flex">Can't delete</p>
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

export default UserMNGM;
