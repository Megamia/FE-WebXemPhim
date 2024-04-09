import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "../../Detail/MovieBox";


const NewList = ({ id }) => {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/${id}`);
                const sortedMovies = response.data.movies
                    .slice(0, 10);
                setMovieData(sortedMovies);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="flex w-full">
            <ul className="flex w-full flex-wrap relative lg:left-[-10px]">
                {movieData.map((movie) => (
                    <MovieBox key={movie.movieid} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default NewList;