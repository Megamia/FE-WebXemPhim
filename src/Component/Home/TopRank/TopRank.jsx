import React, { useEffect, useState } from "react";
import { FaBookmark, FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { PiPlayCircleThin } from "react-icons/pi";

import "./TopRank.css";
import axios from "axios";
const TopRank = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dataPhimBo, setDataPhimBo] = useState([]);
  const [dataPhimLe, setDataPhimLe] = useState([]);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/toprank`
        );
        const phimBo = response.data.phimbo;
        setDataPhimBo(phimBo);
        const phimLe = response.data.phimle;
        setDataPhimLe(phimLe);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // const show = () => {
  //   console.log(dataPhimBo);
  // dataPhimBo.forEach((phimbo) => {
  //   console.log(phimbo.poster);
  // });
  // };

  return (
    <div className="text-white relative  ">
      <div className="title flex flex-row justify-between items-center border-b-[1px] border-b-gray-500 mb-[10px]">
        <div className="pb-[10px] ">
          <p className="uppercase">hot tuần</p>
        </div>
        <div
          onClick={() => handleTabClick(1)}
          className={` ${
            activeTab === 1
              ? "text-red-500 pb-[10px]"
              : "text-gray-500 pb-[12px]"
          }`}
        >
          <p className="cursor-pointer">TV/Series</p>
        </div>
        <div
          onClick={() => handleTabClick(2)}
          className={` ${
            activeTab === 2
              ? "text-red-500  pb-[10px]"
              : "text-gray-500 pb-[12px]"
          }`}
        >
          <p className="cursor-pointer">OVA/Movie</p>
        </div>
      </div>
      <div className="content">
        <div
          className={` ${activeTab === 1 ? "flex animate-zoomIn" : "hidden"}`}
        >
          <div className=" w-full relative ">
            <ul className="flex flex-col gap-[10px]">
              {dataPhimBo.slice(0, 5).map((phimbo, index) => (
                <li key={phimbo.movieid} className="">
                  <div className="flex  flex-row gap-[10px]">
                    <a href={`/phim/${phimbo.movieurl}-a${phimbo.movieid}`}>
                      <div
                        className={index === hoveredIndex ? "activeBlur" : ""}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="absolute z-50">
                          <FaBookmark className="text-[#B5E745] text-[28px] absolute left-[-8px]" />
                          <p className="absolute text-black text-[15px] left-[-2px]">
                            #{index + 1}
                          </p>
                        </div>
                        <div className="w-[80px]">
                          <div className="relative">

                          <img
                            src={`${process.env.REACT_APP_API_URL}/upload/poster/${phimbo.poster}`}
                            alt=""
                          />
                          <div
                            className={`play-overlay ${
                              index === hoveredIndex
                                ? "animate-fadeIn"
                                : "animate-fadeOut"
                            }`}
                          >
                            <div className=" blur bg-black bg-opacity-50 rounded-[50%]">
                              <PiPlayCircleThin className="text-white text-6xl" />
                            </div>
                            <PiPlayCircleThin
                              className={`text-white text-7xl absolute ${
                                index === hoveredIndex
                                  ? "animate-zoomIn"
                                  : "animate-zoomOut"
                              }`}
                            />
                          </div>
                          </div>
                        </div>
                      </div>
                      
                    </a>

                    <div className=" flex-1 flex-col">
                      <a href={`/phim/${phimbo.movieurl}-a${phimbo.movieid}`}>
                        <div
                          className={`name flex flex-1 ${
                            index === hoveredIndex ? "activeBlur" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <p
                            className={`text-[15px] ${
                              index === hoveredIndex ? "activeBlur" : ""
                            }`}
                          >
                            {phimbo.moviename}
                          </p>
                        </div>
                      </a>
                      <div className=" detailsTopRank flex flex-row">
                        <div className="detailsTopRankRate ">
                          <FaStar />
                          <p>
                            {phimbo.average_value ? phimbo.average_value : "??"}
                          </p>
                        </div>
                        <div className="detailsTopRankRate detailsTopRankEpsiodes">
                          <GoClock />
                          <p>
                            {phimbo.count_video}/
                            {phimbo.episodes ? phimbo.episodes : "??"}
                          </p>
                        </div>
                        <div className="detailsTopRankRate detailsTopRankReleaseYear">
                          <LuCalendarDays />
                          <p>
                            {phimbo.release_year ? phimbo.release_year : "??"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={` ${activeTab === 2 ? "flex animate-zoomIn" : "hidden"}`}
        >
          <div className=" w-full relative ">
            <ul className="flex flex-col gap-[10px]">
              {dataPhimLe.slice(0, 5).map((phimle, index) => (
                <li key={phimle.movieid} className="">
                  <div className="flex  flex-row gap-[10px]">
                    <a href={`/phim/${phimle.movieurl}-a${phimle.movieid}`}>
                      <div
                        className={index === hoveredIndex ? "activeBlur" : ""}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="absolute">
                          <FaBookmark className="text-[#B5E745] text-[28px] absolute left-[-8px]" />
                          <p className="absolute text-black text-[15px] left-[-2px]">
                            #{index + 1}
                          </p>
                        </div>
                        <div className="w-[80px]">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/upload/poster/${phimle.poster}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </a>

                    <div className=" flex-1 flex-col">
                      <a href={`/phim/${phimle.movieurl}-a${phimle.movieid}`}>
                        <div
                          className={`name flex flex-1 ${
                            index === hoveredIndex ? "activeBlur" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <p
                            className={`text-[15px] ${
                              index === hoveredIndex ? "activeBlur" : ""
                            }`}
                          >
                            {phimle.moviename}
                          </p>
                        </div>
                      </a>
                      <div className=" detailsTopRank flex flex-row">
                        <div className="detailsTopRankRate ">
                          <FaStar />
                          <p>
                            {phimle.average_value ? phimle.average_value : "??"}
                          </p>
                        </div>
                        <div className="detailsTopRankRate detailsTopRankEpsiodes">
                          <GoClock />
                          <p>
                            {phimle.count_video}/
                            {phimle.episodes ? phimle.episodes : "??"}
                          </p>
                        </div>
                        <div className="detailsTopRankRate detailsTopRankReleaseYear">
                          <LuCalendarDays />
                          <p>
                            {phimle.release_year ? phimle.release_year : "??"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRank;
