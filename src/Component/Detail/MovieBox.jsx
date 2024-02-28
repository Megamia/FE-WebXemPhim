import React from "react";
import "./Detail.css";

const MovieBox = ({ movie }) => {

    return (
        <li key={movie.movieid} className="w-1/5 mb-5 px-[10px]">
            <a className="flex-col w-full" href={`/phim/${movie.movieurl}-a${movie.movieid}`}>
                <div className="img-moviebox">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded"
                        src={`../../upload/poster/${movie.poster}`}
                        alt="Movie Avatar"
                    />
                </div>
                <h2 className="text-white capitalize font-semibold flex justify-center">
                    <span className="truncate">{movie.moviename}</span>
                </h2>
                <span className="text-[#7D7D7D] flex justify-center text-[13px] font-semibold">Lượt xem: {movie.views}</span>
            </a>
        </li>

    );
};

export default MovieBox;