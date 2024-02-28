import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import { FaStar, FaRegClock, FaUser } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { MdMovie } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
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
    const [informations, setInformations] = useState([
        { id: 1, name: 'Spy x Family', star: 1, date: "01/01/1111", intro: 'Mỗi người đều có một phần bí mật của mình mà họ không thể cho ai khác biết.Vào thời điểm mà tất cả các quốc gia trên thế giới đang tham gia vào một cuộc chiến tranh thông tin khốc liệt xảy ra sau những cánh cửa đóng kín, Ostania và Westalis đã ở trong tình trạng chiến tranh lạnh với nhau trong nhiều thập kỷ.Bộ phận Tập trung vào phía Đông của Dịch vụ Tình báo Westalis (WISE) cử điệp viên tài năng nhất của họ, "Twilight", theo mật vụ tối mật để điều tra các chuyển động của Donovan Desmond, chủ tịch Đảng Thống nhất Quốc gia của Ostania, người đang đe dọa các nỗ lực hòa bình giữa hai quốc gia.Nhiệm vụ này được gọi là "Chiến dịch Strix."Nó bao gồm "tập hợp một gia đình trong một tuần để xâm nhập vào các cuộc tụ họp xã hội được tổ chức bởi ngôi trường ưu tú mà con trai Desmond theo học.""Twilight" lấy nhân dạng của bác sĩ tâm thần Loid Forger và bắt đầu tìm kiếm các thành viên trong gia đình. Nhưng Anya, cô con gái mà anh nhận nuôi, hóa ra lại có khả năng đọc được suy nghĩ của mọi người, trong khi vợ anh Yor lại là một sát thủ! Vì lợi ích riêng mỗi người đều giữ kín những bí mật này, họ bắt đầu sống cùng nhau và không để lộ danh tính thật của mình với nhau.Hòa bình thế giới giờ đây nằm trong tay của gia đình mới này khi họ dấn thân vào một cuộc phiêu lưu đầy bất ngờ.', studio: 'Wit Studio, CloverWorks', category: ' Anime bộ, Shounen, Comedy, Action,' },
        { id: 2, name: 'Sword Art Online', star: 2, date: "02/02/2222", intro: 'Năm 2022, thế hệ game chạy trên NERvGear tiếp theo đã được công bố, người dùng có thể kết nối với thế giới ảo thông qua chức năng FullDive. SAO (Sword Art Online) - dòng game VRMMORPG chính thống đầu tiên trên nền NERvGear đã gây xôn xao trên toàn thế giới. Một trong số rất nhiều người chơi, Kirito, quyết tâm chinh phục trò chơi này. Thế nhưng, người sáng tạo ra SAO, Akihiko Kayaba lại thông báo rằng: Một khi đã tham gia thì không người chơi nào có thể thoát ra ngoài cho đến khi phá đảo. Game Over tương đương với cái chết thực sự ngoài đời.', studio: ' A-1 Pictures', category: ' Anime bộ, Romance, Game, Fantasy, Adventure, Action,' },
        { id: 3, name: 'Re:Zero kara Hajimeru Isekai Seikatsu', star: 3, date: "03/03/3333", intro: 'Trong phim Subaru Natsuki là một học sinh Trung học bình thường, cậu bị triệu hồi đến một thế giới khác và được cứu bởi một cô gái xinh đẹp. Cậu quyết định ở lại trả ơn cho cô ấy, nhưng không đơn giản như vẻ ngoài của nó. Hai người bị kẻ thù tấn công và họ đã chết. Nhưng chính lúc này cậu lại phát hiện ra khả năng đặc biệt của mình là quay ngược thời gian, tạm gọi là “ Hối Sinh “ về thời điểm mà cậu bắt đầu đến thế giới này nhưng chỉ có một mình cậu nhớ những gì đã xảy ra…. Cậu sẽ làm gì? Hãy cùng đón xem.', studio: 'White Fox', category: ' Anime bộ, Thriller, Psychological, Fantasy, Drama,' },
        { id: 4, name: 'Spy x Family', star: 1, date: "01/01/1111", intro: 'Mỗi người đều có một phần bí mật của mình mà họ không thể cho ai khác biết.Vào thời điểm mà tất cả các quốc gia trên thế giới đang tham gia vào một cuộc chiến tranh thông tin khốc liệt xảy ra sau những cánh cửa đóng kín, Ostania và Westalis đã ở trong tình trạng chiến tranh lạnh với nhau trong nhiều thập kỷ.Bộ phận Tập trung vào phía Đông của Dịch vụ Tình báo Westalis (WISE) cử điệp viên tài năng nhất của họ, "Twilight", theo mật vụ tối mật để điều tra các chuyển động của Donovan Desmond, chủ tịch Đảng Thống nhất Quốc gia của Ostania, người đang đe dọa các nỗ lực hòa bình giữa hai quốc gia.Nhiệm vụ này được gọi là "Chiến dịch Strix."Nó bao gồm "tập hợp một gia đình trong một tuần để xâm nhập vào các cuộc tụ họp xã hội được tổ chức bởi ngôi trường ưu tú mà con trai Desmond theo học.""Twilight" lấy nhân dạng của bác sĩ tâm thần Loid Forger và bắt đầu tìm kiếm các thành viên trong gia đình. Nhưng Anya, cô con gái mà anh nhận nuôi, hóa ra lại có khả năng đọc được suy nghĩ của mọi người, trong khi vợ anh Yor lại là một sát thủ! Vì lợi ích riêng mỗi người đều giữ kín những bí mật này, họ bắt đầu sống cùng nhau và không để lộ danh tính thật của mình với nhau.Hòa bình thế giới giờ đây nằm trong tay của gia đình mới này khi họ dấn thân vào một cuộc phiêu lưu đầy bất ngờ.', studio: 'Wit Studio, CloverWorks', category: ' Anime bộ, Shounen, Comedy, Action,' },
        { id: 5, name: 'Sword Art Online', star: 2, date: "02/02/2222", intro: 'Năm 2022, thế hệ game chạy trên NERvGear tiếp theo đã được công bố, người dùng có thể kết nối với thế giới ảo thông qua chức năng FullDive. SAO (Sword Art Online) - dòng game VRMMORPG chính thống đầu tiên trên nền NERvGear đã gây xôn xao trên toàn thế giới. Một trong số rất nhiều người chơi, Kirito, quyết tâm chinh phục trò chơi này. Thế nhưng, người sáng tạo ra SAO, Akihiko Kayaba lại thông báo rằng: Một khi đã tham gia thì không người chơi nào có thể thoát ra ngoài cho đến khi phá đảo. Game Over tương đương với cái chết thực sự ngoài đời.', studio: ' A-1 Pictures', category: ' Anime bộ, Romance, Game, Fantasy, Adventure, Action,' },
        { id: 6, name: 'Re:Zero kara Hajimeru Isekai Seikatsu', star: 3, date: "03/03/3333", intro: 'Trong phim Subaru Natsuki là một học sinh Trung học bình thường, cậu bị triệu hồi đến một thế giới khác và được cứu bởi một cô gái xinh đẹp. Cậu quyết định ở lại trả ơn cho cô ấy, nhưng không đơn giản như vẻ ngoài của nó. Hai người bị kẻ thù tấn công và họ đã chết. Nhưng chính lúc này cậu lại phát hiện ra khả năng đặc biệt của mình là quay ngược thời gian, tạm gọi là “ Hối Sinh “ về thời điểm mà cậu bắt đầu đến thế giới này nhưng chỉ có một mình cậu nhớ những gì đã xảy ra…. Cậu sẽ làm gì? Hãy cùng đón xem.', studio: 'White Fox', category: ' Anime bộ, Thriller, Psychological, Fantasy, Drama,' },
        { id: 7, name: 'Spy x Family', star: 1, date: "01/01/1111", intro: 'Mỗi người đều có một phần bí mật của mình mà họ không thể cho ai khác biết.Vào thời điểm mà tất cả các quốc gia trên thế giới đang tham gia vào một cuộc chiến tranh thông tin khốc liệt xảy ra sau những cánh cửa đóng kín, Ostania và Westalis đã ở trong tình trạng chiến tranh lạnh với nhau trong nhiều thập kỷ.Bộ phận Tập trung vào phía Đông của Dịch vụ Tình báo Westalis (WISE) cử điệp viên tài năng nhất của họ, "Twilight", theo mật vụ tối mật để điều tra các chuyển động của Donovan Desmond, chủ tịch Đảng Thống nhất Quốc gia của Ostania, người đang đe dọa các nỗ lực hòa bình giữa hai quốc gia.Nhiệm vụ này được gọi là "Chiến dịch Strix."Nó bao gồm "tập hợp một gia đình trong một tuần để xâm nhập vào các cuộc tụ họp xã hội được tổ chức bởi ngôi trường ưu tú mà con trai Desmond theo học.""Twilight" lấy nhân dạng của bác sĩ tâm thần Loid Forger và bắt đầu tìm kiếm các thành viên trong gia đình. Nhưng Anya, cô con gái mà anh nhận nuôi, hóa ra lại có khả năng đọc được suy nghĩ của mọi người, trong khi vợ anh Yor lại là một sát thủ! Vì lợi ích riêng mỗi người đều giữ kín những bí mật này, họ bắt đầu sống cùng nhau và không để lộ danh tính thật của mình với nhau.Hòa bình thế giới giờ đây nằm trong tay của gia đình mới này khi họ dấn thân vào một cuộc phiêu lưu đầy bất ngờ.', studio: 'Wit Studio, CloverWorks', category: ' Anime bộ, Shounen, Comedy, Action,' },
        { id: 8, name: 'Sword Art Online', star: 2, date: "02/02/2222", intro: 'Năm 2022, thế hệ game chạy trên NERvGear tiếp theo đã được công bố, người dùng có thể kết nối với thế giới ảo thông qua chức năng FullDive. SAO (Sword Art Online) - dòng game VRMMORPG chính thống đầu tiên trên nền NERvGear đã gây xôn xao trên toàn thế giới. Một trong số rất nhiều người chơi, Kirito, quyết tâm chinh phục trò chơi này. Thế nhưng, người sáng tạo ra SAO, Akihiko Kayaba lại thông báo rằng: Một khi đã tham gia thì không người chơi nào có thể thoát ra ngoài cho đến khi phá đảo. Game Over tương đương với cái chết thực sự ngoài đời.', studio: ' A-1 Pictures', category: ' Anime bộ, Romance, Game, Fantasy, Adventure, Action,' },
        { id: 9, name: 'Re:Zero kara Hajimeru Isekai Seikatsu', star: 3, date: "03/03/3333", intro: 'Trong phim Subaru Natsuki là một học sinh Trung học bình thường, cậu bị triệu hồi đến một thế giới khác và được cứu bởi một cô gái xinh đẹp. Cậu quyết định ở lại trả ơn cho cô ấy, nhưng không đơn giản như vẻ ngoài của nó. Hai người bị kẻ thù tấn công và họ đã chết. Nhưng chính lúc này cậu lại phát hiện ra khả năng đặc biệt của mình là quay ngược thời gian, tạm gọi là “ Hối Sinh “ về thời điểm mà cậu bắt đầu đến thế giới này nhưng chỉ có một mình cậu nhớ những gì đã xảy ra…. Cậu sẽ làm gì? Hãy cùng đón xem.', studio: 'White Fox', category: ' Anime bộ, Thriller, Psychological, Fantasy, Drama,' },
    ])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const Notification = () => {
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
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: (i) => (
            <li key={i}>
                <div
                    className={`${styles.dot} ${activeDotIndex === i ? styles.active : ''}`}
                    onClick={() => handleDotClick(i)}
                />
            </li>
        ),

        beforeChange: (current, next) => {
            handleDotClick(next);
            setCurrentSlide(next);
        },
    };

    const handleDotClick = (index) => {
        setActiveDotIndex(index);
        setCurrentSlide(index);
    };

    return (
        <>
            <Slider {...settings}>
                {images.map((image, index) => {
                    const information = informations.find(info => info.id === image.id);
                    return (
                        <div className="relative" key={index}>
                            <div className="bg-black absolute top-0 left-0 opacity-40 w-[60%] h-[100%] flex px-[20px] py-[10px] flex-col" />

                            <div className=" absolute top-0 left-0  w-[60%] h-[100%] flex px-[20px] py-[10px] flex-col">

                                {/*NAME*/}
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="w-[100%]">
                                    <div className="text-white text-[40px]  ">
                                        {information && information.name}
                                    </div>
                                </a>
                                <div className=" text-[20px] flex flex-col ">
                                    <div className="flex flex-row">
                                        {/*STAR*/}
                                        <div className="text-[#B5E745] flex flex-row items-center mr-[50px] py-[5px]">
                                            <FaStar className="  text-[16px] flex mr-[10px]" />
                                            {information && information.star}
                                        </div>

                                        {/*DATE*/}
                                        <div className="text-white flex flex-row flex-1 items-center py-[5px]">
                                            <FaRegClock className="  text-[16px] flex mr-[10px]" />
                                            {information && information.date}
                                        </div>
                                    </div>


                                    {/*INTRO*/}
                                    <div className="text-white flex flex-row items-center py-[5px]">
                                        <div className="line-clamp-2">
                                            {information && information.intro}
                                        </div>
                                    </div>

                                    {/*STUDIO*/}
                                    <div className="text-white flex flex-row flex-1 items-center py-[5px]">
                                        <AiFillVideoCamera className=" text-[#B5E745] text-[20px] flex mr-[10px]" />
                                        {information && information.studio}
                                    </div>

                                    {/*CATEGORY*/}
                                    <div className="text-white flex flex-row flex-1 items-center py-[5px]">
                                        <MdMovie className=" text-[#B5E745] text-[20px] flex mr-[10px]" />
                                        {information && information.category}
                                    </div>

                                    <div className=" flex flex-row flex-1 items-center my-[5px]">
                                        {Array(5).fill().map((_, index) => (
                                            <div key={index} className="flex bg-[#1a1616] rounded-full p-[10px] justify-center items-center mr-[10px]">
                                                <FaUser className="text-white text-[25px]" />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="bg-red-500 flex w-[200px] justify-center rounded-[10px] px-[20px] py-[10px] mt-[20px]">
                                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="flex flex-row items-center">
                                            <FaPlay className="text-white mr-[15px]" />
                                            <div className=" flex flex-1 text-white font-bold ">
                                                Xem phim
                                            </div>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <img src={image.img} alt={`Slide ${index + 1}`} className="cursor-pointer" />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Slider1;
