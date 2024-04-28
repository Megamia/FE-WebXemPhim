import React, { useEffect, useState } from "react";
import "./Detail.css";
import { FaStar } from "react-icons/fa";
import { PiPlayCircleThin } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { BsCameraReelsFill } from "react-icons/bs";
import axios from "axios";

const MovieBox = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [activeItems, setActiveItems] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  let MovieId = movie.movieid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!MovieId) return;
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/phim-moi/details/${MovieId}`
        );
        const data = response.data.dataMovie;
        setDataMovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [MovieId]);

  const handleHover = (item) => {
    setActiveItems((prevItems) => [
      ...prevItems,
      { ...item, dataMovie: dataMovie },
    ]);
    // console.log(MovieId);
    // console.log(dataMovie);
    // console.log(dataMovie[0]);
  };

  const handleMouseLeave = (item) => {
    setActiveItems((prevItems) =>
      prevItems.filter((activeItem) => activeItem.movieid !== item.movieid)
    );
  };

  return (
    <>
      <li key={movie.movieid} className="w-1/5 mb-5 px-[10px] relative">
        <a
          className="flex-col w-full"
          href={`/phim/${movie.movieurl}-a${movie.movieid}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative w-full h-full"
            onMouseEnter={() => handleHover(movie)}
            onMouseLeave={() => handleMouseLeave(movie)}
          >
            <div className="img-moviebox">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded"
                src={`${process.env.REACT_APP_API_URL}/upload/poster/${movie.poster}`}
                alt="Movie Avatar"
              />
              <div
                className={`play-overlay ${
                  isHovered ? "animate-fadeIn" : "animate-fadeOut"
                }`}
              >
                <div className=" blur bg-black bg-opacity-40 rounded-[50%]">
                  <PiPlayCircleThin className="text-white text-6xl" />
                </div>
                <PiPlayCircleThin
                  className={`text-white text-7xl absolute ${
                    isHovered ? "animate-zoomIn" : "animate-zoomOut"
                  }`}
                />
              </div>
            </div>
            <h2 className="text-white capitalize font-semibold flex justify-center">
              <span className="truncate">{movie.moviename}</span>
            </h2>
            <span className="text-[#7D7D7D] flex justify-center text-[13px] font-semibold">
              Lượt xem: {movie.views}
            </span>
            {movie.videoname ? (
              <div className="absolute top-1 right-1 ">
                <div className="relative w-[70px] h-[60px] flex flex-col justify-center items-center rounded-[50%] font-semibold text-white">
                  <p className="mt-[2px] text-[10px] z-20">TẬP</p>
                  <p className="mt-[-8px] font-bold text-[20px] z-20">
                    {movie.videoname}
                  </p>
                  <img
                    className="absolute z-0"
                    src="../../img/—Pngtree—explosion sticker red blast sticker_39456252.png"
                    alt="?"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`absolute bottom-[50%] w-full flex bg-[#AA2121] justify-center ${
                  isHovered ? "animate-fadeOut" : "animate-fadeIn"
                }`}
              >
                <p className="text-white px-4 py-1 font-semibold text-[18px]">
                  Sắp chiếu
                </p>
              </div>
            )}
            <div className="text-[#F5EC42] text-[15px] font-semibold flex items-center absolute top-1 left-1 bg-black py-1 px-3 bg-opacity-80 rounded-full">
              <FaStar />
              <span className="z-20">
                {movie.average_rating !== null ? movie.average_rating : 0}
              </span>
            </div>
            {activeItems.map((activeItem) => (
              <div
                className="details flex flex-col p-[20px]  gap-[5px]"
                key={activeItem.movieid}
              >
                {activeItem.dataMovie.length > 0 ? (
                  <div key={activeItem.dataMovie.movieid}>
                    <div className="showDetails">
                      <div className="text-[#1A2023] text-[15px] uppercase font-bold leading-[1.3]">
                        <p>{activeItem.dataMovie[0].moviename}</p>
                      </div>
                      <div className="items gap-4">
                        <div className="itemschild  text-[#B5E745] !important">
                          <FaStar />
                          <p>
                            {" "}
                            {activeItem.dataMovie[0].average_rating !== null
                              ? activeItem.dataMovie[0].average_rating
                              : "??"}
                          </p>
                        </div>
                        <div className="itemschild  ">
                          <GoClock />
                          <p>
                            {" "}
                            {activeItem.dataMovie[0].episodes !== null
                              ? activeItem.dataMovie[0].episodes
                              : "??"}
                          </p>
                        </div>
                        <div className="itemschild  ">
                          <LuCalendarDays />
                          <p>
                            {" "}
                            {activeItem.dataMovie[0].release_year !== null
                              ? activeItem.dataMovie[0].release_year
                              : "??"}
                          </p>
                        </div>
                      </div>
                      <div className="des items   ">
                        <p>{activeItem.dataMovie[0].moviedescribe}</p>
                      </div>
                      <div className="items  ">
                        <BsCameraReelsFill className="icon" />
                        <div className="element">
                          <p className="elementName">Studio: </p>
                          {/* <p>{activeItem.dataMovie[0].author}</p> */}
                          {activeItem.dataMovie[0].author ? (
                            <p className="elementData">
                              {activeItem.dataMovie[0].author}
                            </p>
                          ) : (
                            <p className="elementData">Đang cập nhật</p>
                          )}
                        </div>
                      </div>
                      <div className="items  ">
                        <BsCameraReelsFill className=" icon" />
                        <div className="element">
                          <p className="elementName ">Thể loại: </p>
                          <p className="elementData">
                            {activeItem.dataMovie
                              .map((data) => data.typename)
                              .join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="items  ">
                        <BsCameraReelsFill className="icon" />
                        <div className="element">
                          <p className="elementName">Diễn viên: </p>
                          <p className="elementData">Đang cập nhật</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="noDataMovie">
                    <p>Phim chưa có thông tin </p>
                    <p>┐('～`；)┌</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </a>
      </li>
    </>
  );
};

export default MovieBox;
