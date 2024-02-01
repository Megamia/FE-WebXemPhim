import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import { Link } from "react-router-dom";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
const Slider10 = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    }, []);
    const [startIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideOffset] = useState(0);
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
        <div className="flex-1 ">
            <div className={styles.slider}>
                <div className={styles.sliderContainer} style={{ transform: `translateX(${slideOffset}%)` }}>
                    <button className="flex absolute z-10 text-[20px] top-[30%] left-0 bg-red-500 py-[5px] px-[7px] rounded-[50%]">
                        <div className="text-white flex items-center p-[2px]" onClick={prevSlide} disabled={isTransitioning}>
                            <GrCaretPrevious className=" ml-[-3px] " />
                        </div>
                    </button>
                    {visibleImages.map((slide, index) => (
                        <div className={styles.slide} key={slide.id}>
                            <Link to={`/detail/${slide.id}`}>
                                <img src={slide.img} alt={` ${slide.id}`} />
                            </Link>
                        </div>
                    ))}
                    <button className="flex absolute z-10 text-[20px] top-[30%] right-0 bg-red-500 py-[5px] px-[7px] rounded-[50%]">
                        <div className="text-white flex items-center p-[2px]" onClick={nextSlide} disabled={isTransitioning}>
                            <GrCaretNext className=" mr-[-3px]" />
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Slider10;