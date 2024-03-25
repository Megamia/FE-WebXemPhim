import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DonateHistory = () => {
  const [donates, setDonates] = useState([]);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      axios
        .get("http://localhost:4000/api/history", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setDonates(response.data.history); // Chỉnh sửa: Lấy dữ liệu từ response.data.history
        })
        .catch((error) => {
          console.error("Error fetching donate history:", error);
        });
    }
  }, []);

  return (
    <div className="flex flex-col flex-1 px-[35px] bg-[#263238] ">
      <div className="flex flex-row flex-1">
        <div className="main flex flex-col flex-1">
          <div className="flex flex-1 flex-row justify-between  text-[25px] text-white ">
            <div className="flex flex-col  ">
              <span>STT</span>
              <div className="text-[15px] ">
                {donates.length > 0 ? (
                  donates.map((donate, index) => (
                    <div key={donate.donatehistoryid}>{index + 1}</div>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>

            <div className="flex flex-col  ">
              <span>Name</span>
              <div className="text-[15px] ">
                {donates.length > 0 ? (
                  donates.map((donate) => (
                    <div key={donate.donatehistoryid}>{donate.donatename}</div>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Price</span>
              <div className="text-[15px] ">
                {donates.length > 0 ? (
                  donates.map((donate) => (
                    <div key={donate.donatehistoryid}>{donate.price}</div>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Mô tả</span>
              <div className="text-[15px] ">
                {donates.length > 0 ? (
                  donates.map((donate) => (
                    <div key={donate.donatehistoryid}>{donate.description}</div>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Thời gian donate</span>
              <div className="text-[15px] ">
                {donates.length > 0 ? (
                  donates.map((donate) => (
                    <div key={donate.donatehistoryid}>{donate.date}</div>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateHistory;
