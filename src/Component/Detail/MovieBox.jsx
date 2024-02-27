import React from "react";


const MovieBox = ({ movie}) => {

    return (

        <li key={movie.movieid} className="w-1/5 mb-5 px-[10px]">
            <a className="block w-full" href={`/phim/${movie.movieurl}`}>
                <div>
                    <img
                        className="w-[200px] flex justify-center rounded"
                        src={`../../upload/poster/${movie.poster}`}
                        alt="Movie Avatar"
                    />
                </div>
                <span className="text-white flex justify-center capitalize">{movie.moviename}</span>
                <span className="text-[#7D7D7D] flex justify-center text-[13px]">Lượt xem: {movie.views}</span>
            </a>
        </li>

    );
};

export default MovieBox;