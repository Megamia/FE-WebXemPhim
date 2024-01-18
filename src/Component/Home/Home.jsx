import React, { useEffect,useState } from "react";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog(Home)";
import Footer from "../Footer/Footer";
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);
  const [images, setImages] = useState([
    './img/nisekoi.png',
    './img/zom100.png',
    './img/oroka_na_tenshi.png',
    './img/Frieren.png',
    './img/Goku_no_picolo.png',
    './img/Jujutsu_kaisen.png',
    './img/Ao_no_exorcist.png',
    './img/Solo_Leveling.png',
    './img/Jii-san Baa-san Wakagaeru.png',
    './img/grand_blue.png',
  ]);

  // const nextSlide = () => {
  //   if (isTransitioning) return;
  //   setIsTransitioning(true);
  
  //   setTimeout(() => {
  //     setImages(prevImages => {
  //       const newImages = [...prevImages];
  //       const firstItem = newImages.shift();
  //       newImages.push(firstItem);
  //       return newImages;
  //     });
  
  //     setIsTransitioning(false);
  //   }, 300);
  // };
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const firstItem = images[0];
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages.shift();
      newImages.push(firstItem);
      return newImages;
    });
  
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };


  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const lastImage = images[images.length - 1];
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages.pop();
      newImages.unshift(lastImage);
      return newImages;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const visibleImages = images.slice(startIndex, startIndex + 10);

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
          <div className={styles.slider}>
            <div className={styles.sliderContainer} style={{ transform: `translateX(${slideOffset}%)` }}>
              {visibleImages.map((image, index) => (
                <div className={styles.slide} key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="text-white" onClick={prevSlide} disabled={isTransitioning}>
              Previous
            </button>
            <button className="text-white" onClick={nextSlide} disabled={isTransitioning}>
              Next
            </button>
          </div>
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