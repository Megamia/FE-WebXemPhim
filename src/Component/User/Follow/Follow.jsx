import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Follow = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const storedToken = Cookies.get("token");

      try {
        const response = await axios.get("http://localhost:4000/api/follow", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error retrieving movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-1 justify-center text-white flex-col">
      <span>Followed:</span>
      <div className="flex flex-col">
        <div>
          <span>Movie</span>
        </div>
        <div>
          {movies.map((movie) => (
            <div key={movie?.followid} className="py-[10px]">
              {movie.movieid}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Follow;
