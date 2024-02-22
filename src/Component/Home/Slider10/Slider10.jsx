import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const Slider10 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const Notification = () => {
    alert('Clm bình tĩnh đi đã làm đâu');
  }
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  const CustomPrevArrow = (props) => {
    return (
      <div className="bg-red-500 text-white flex absolute top-[70px] left-[10px] w-[25px] h-[25px] items-center justify-center z-10 cursor-pointer" onClick={props.onClick}>
        <GrCaretPrevious />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    return (
      <div className="bg-red-500 text-white flex absolute top-[70px] right-[10px] w-[25px] h-[25px] items-center justify-center z-10 cursor-pointer" onClick={props.onClick}>
        <GrCaretNext />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    swipe: true,
    swipeToSlide: true,
    initialSlide: currentSlide,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div>
        <ul className={styles.customDots}>{dots}</ul>
      </div>
    ),

    afterChange: (slideIndex) => {
      setCurrentSlide(slideIndex);
      setIsPaused(false); // Khi thay đổi slide, kích hoạt Slider tự động trượt lại
    },
  };

  const images = [
    { id: 1, img: process.env.PUBLIC_URL + '/img/nisekoi.png' },
    { id: 2, img: process.env.PUBLIC_URL + '/img/zom100.png' },
    { id: 3, img: process.env.PUBLIC_URL + '/img/oroka_na_tenshi.png' },
    { id: 4, img: process.env.PUBLIC_URL + '/img/Frieren.png' },
    { id: 5, img: process.env.PUBLIC_URL + '/img/Goku_no_picolo.png' },
    { id: 6, img: process.env.PUBLIC_URL + '/img/Jujutsu_kaisen.png' },
    { id: 7, img: process.env.PUBLIC_URL + '/img/Ao_no_exorcist.png' },
    { id: 8, img: process.env.PUBLIC_URL + '/img/Solo_Leveling.png' },
    { id: 9, img: process.env.PUBLIC_URL + '/img/Jii-san Baa-san Wakagaeru.png' },
    { id: 10, img: process.env.PUBLIC_URL + '/img/grand_blue.png' },
    { id: 11, img: process.env.PUBLIC_URL + '/img/Ao_no_exorcist.png' },
    { id: 12, img: process.env.PUBLIC_URL + '/img/Jujutsu_kaisen.png' },
    { id: 13, img: process.env.PUBLIC_URL + '/img/Ao_no_exorcist.png' },
    { id: 14, img: process.env.PUBLIC_URL + '/img/Solo_Leveling.png' },
    { id: 15, img: process.env.PUBLIC_URL + '/img/Jii-san Baa-san Wakagaeru.png' },
    { id: 16, img: process.env.PUBLIC_URL + '/img/grand_blue.png' },
    { id: 17, img: process.env.PUBLIC_URL + '/img/Ao_no_exorcist.png' },
  ];

  return (
    <Slider {...settings} className="">
      {images.map((image, index) => (
        <div key={index} className="flex flex-row px-[10px]">
          <img src={image.img} alt={`Slide ${index + 1}`} className="cursor-pointer" onClick={Notification} />
        </div>
      ))}
    </Slider>
  );
};

export default Slider10;
