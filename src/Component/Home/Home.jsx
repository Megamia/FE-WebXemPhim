import React, { useEffect, useState } from "react";
import Header from "../Header&Footer/Header/Header";
import Catalog from "../Catalog/Catalog(Home)";
import Footer from "../Header&Footer/Footer/Footer";
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="bg-[#263238]">
      <Header />
      <div className="bg-[#253238] flex  justify-center">
        <div className="w-[1280px]  justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
          <div className="bg-[#2D2D2D] w-full  p-[10px] mb-[20px]">
            <div
              className={`bg-[#252525] rounded-[50px]  inline-flex w-[40px] h-[40px] items-center justify-center ${styles.icon}`}
            >
              <span className="text-white text-[20px]">
                <FontAwesomeIcon icon={faBullhorn} />
              </span>
            </div>
            <div className={styles.notification}>
              <ul>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Lưu hoặc nhớ ngay link rút gọn
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-white">
                    {' '}bit.ly/2tenvietsub{' '}
                  </a>
                  để truy cập khi nhà mạng chặn!
                </li>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Mời bạn tham gia Group
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#E62117]">
                    {' '}tại đây!{' '}
                  </a>
                  hoặc tham gia Discord
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#E62117]">
                    {' '}tại đây!{' '}
                  </a>
                  để ủng hộ{' '}
                  <span className="text-[#E62117]">2tenvietsub</span>
                </li>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Do thiếu hút kinh phí nên quảng cáo có thể gây khó chịu, rất mong các bạn thông cảm!
                </li>
              </ul>
            </div>
          </div>
          
          <Slider/>
        </div>
      </div>
      {/* <Catalog/> */}
      <div className="w-full  mt-[20px] ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;