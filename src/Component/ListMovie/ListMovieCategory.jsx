import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const ListMovieCategory = () => {
  const [movieData, setMovieData] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    axios.get(`http://localhost:4000/api/category-movie/${category}`)
      .then(function (response) {
        // Handle the data when a successful response is received from the API
        console.log(response.data); // Log the data to the console
        setMovieData(response.data.movies); // Store the movies array in state
      })
      .catch(function (error) {
        // Handle any errors
        console.log(error);
      });
  }, [category]);
  return (
    <div className="w-full bg-[#141414]">
      <div className="flex w-full flex-1 pt-[20px] pb-[20px]">
        <div className="bg-[#A0182C] rounded pt-1 pb-1 pl-3 pr-3 flex items-center">
          <p className="text-[20px] text-[#EEEEEE] capitalize">MỚI CẬP NHẬT</p>
          <FaChevronRight className="text-[#EEEEEE] ml-2" />
        </div>
      </div>
      <div className="flex w-full">
        <ul className=" flex w-full flex-wrap relative left-[-10px]">
          {movieData.map((movie) => (
            <li key={movie.movieid} className="w-1/5 mb-5 px-[10px]" >
              <a className="block w-full" href="/#">
                <div>
                  <img className="w-[200px] flex justify-center rounded" src={"../../upload/poster/" + movie.poster} alt="Movie Avatar" />
                </div>
                <span className="text-white flex justify-center capitalize">{movie.moviename}</span>
                <span className="text-[#7D7D7D] flex justify-center text-[13px]">Lượt xem: {movie.views}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default ListMovieCategory;