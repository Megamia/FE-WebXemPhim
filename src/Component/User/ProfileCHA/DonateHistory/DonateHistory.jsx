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
          setDonates(response.data.history);
        })
        .catch((error) => {
          console.error("Error fetching donate history:", error);
        });
    }
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col flex-1 px-[35px] bg-[#263238] ">
      <div className="flex flex-row flex-1">
        <div className="main flex flex-col flex-1">
          <div className="flex flex-1 flex-row justify-between  text-[25px] text-white ">
            <div className="flex flex-col  ">
              <span>STT</span>
              <div className="text-[15px] flex justify-center">
                {donates.length > 0 ? (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    donates.map((donate, index) => (
                      <div key={donate.donatehistoryid}>{index + 1}</div>
                    ))
                  )
                ) : (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>No data</div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col  ">
              <span>Name</span>
              <div className="text-[15px] ">
              {donates.length > 0 ? (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    donates.map((donate, index) => (
                      <div key={donate.donatehistoryid}>{donate.donatename}</div>
                    ))
                  )
                ) : (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>No data</div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Price</span>
              <div className="text-[15px] ">
              {donates.length > 0 ? (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    donates.map((donate, index) => (
                      <div key={donate.donatehistoryid}>{donate.price}</div>
                    ))
                  )
                ) : (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>No data</div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Mô tả gói</span>
              <div className="text-[15px] ">
              {donates.length > 0 ? (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    donates.map((donate, index) => (
                      <div key={donate.donatehistoryid}>{donate.description}</div>
                    ))
                  )
                ) : (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>No data</div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Thời gian donate</span>
              <div className="text-[15px] ">
              {donates.length > 0 ? (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    donates.map((donate, index) => (
                      <div key={donate.donatehistoryid}>{donate.date}</div>
                    ))
                  )
                ) : (
                  isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>No data</div>
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

export default DonateHistory;
