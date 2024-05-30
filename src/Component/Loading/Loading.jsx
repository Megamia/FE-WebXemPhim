import React, { useState, useEffect } from "react";
import "./load.css";
const Loading = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError(true); // Kích hoạt hiển thị thông báo lỗi sau một khoảng thời gian
    }, 1500); // Thời gian đợi trước khi hiển thị thông báo lỗi, đơn vị: mili giây

    return () => clearTimeout(timer); // Xóa bộ đếm khi component unmount
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#333]">
      {isError ? ( // Hiển thị thông báo lỗi nếu isError là true
        <div className="main">
          <div class="loading-window">
            <div class="car">
              <div class="strike"></div>
              <div class="strike strike2"></div>
              <div class="strike strike3"></div>
              <div class="strike strike4"></div>
              <div class="strike strike5"></div>
              <div class="car-detail spoiler"></div>
              <div class="car-detail back"></div>
              <div class="car-detail center"></div>
              <div class="car-detail center1"></div>
              <div class="car-detail front"></div>
              <div class="car-detail wheel"></div>
              <div class="car-detail wheel wheel2"></div>
            </div>

            <div class="text">
              <span>Loading please wait</span>
              <span class="dots">...</span>
            </div>
          </div>
        </div>
      ) : (
        // Hiển thị màn hình đen với vòng quay loading
        <div className="w-screen h-screen flex">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Loading;
