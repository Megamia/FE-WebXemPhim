import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import { Link } from "react-router-dom";
const Slider = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    }, []);
    const [startIndex, setStartIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideOffset, setSlideOffset] = useState(0);
    const [images, setImages] = useState([
        { id: 1, img: './img/nisekoi.png' },
        { id: 2, img: './img/zom100.png' },
        { id: 3, img: './img/oroka_na_tenshi.png' },
        { id: 4, img: './img/Frieren.png' },
        { id: 5, img: './img/Goku_no_picolo.png' },
        { id: 6, img: './img/Jujutsu_kaisen.png' },
        { id: 7, img: './img/Ao_no_exorcist.png' },
        { id: 8, img: './img/Solo_Leveling.png' },
        { id: 9, img: './img/Jii-san Baa-san Wakagaeru.png' },
        { id: 10, img: './img/grand_blue.png' },
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
        <div>

            <div className={styles.slider}>
                <div className={styles.sliderContainer} style={{ transform: `translateX(${slideOffset}%)` }}>
                    {visibleImages.map((slide, index) => (
                        <div className={styles.slide} key={slide.id}>
                            <Link to={`/detail/${slide.id}`}>
                                <img src={slide.img} alt={`Image ${slide.id}`} />
                            </Link>
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
    )
}
export default Slider;