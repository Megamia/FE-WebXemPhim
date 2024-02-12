import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './style.module.scss'
const Slider1 = () => {
    const [images, setImages] = useState([
        { id: 1, img: process.env.PUBLIC_URL + '/img/anya.png' },
        { id: 2, img: process.env.PUBLIC_URL + '/img/asuna.png' },
        { id: 3, img: process.env.PUBLIC_URL + '/img/rem.png' },
        { id: 4, img: process.env.PUBLIC_URL + '/img/anya.png' },
        { id: 5, img: process.env.PUBLIC_URL + '/img/asuna.png' },
        { id: 6, img: process.env.PUBLIC_URL + '/img/rem.png' },
        { id: 7, img: process.env.PUBLIC_URL + '/img/anya.png' },
        { id: 8, img: process.env.PUBLIC_URL + '/img/asuna.png' },
        { id: 9, img: process.env.PUBLIC_URL + '/img/rem.png' },
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const Notification = () =>{
        alert('Clm bình tĩnh đi đã làm đâu');
    }
    useEffect(() => {
        document.title = "Trang chủ";
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: (i) => (
            <li key={i}>
                <div 
                    className={`${styles.dot} ${activeDotIndex === i ? styles.active : ''}`}
                    onClick={() => handleDotClick(i)}
                />
            </li>
        ),
        
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    

    const handleDotClick = (index) => {
        setActiveDotIndex(index);
        setCurrentSlide(index); 
    };

    return (
        <>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.img} alt={`Slide ${index + 1}`} className="cursor-pointer" onClick={Notification} />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Slider1;
