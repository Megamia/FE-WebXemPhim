import React, { useEffect, useState } from "react";
import styles from './style.module.scss';

const Slider = () => {
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
        <div>

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
    )
}
export default Slider;