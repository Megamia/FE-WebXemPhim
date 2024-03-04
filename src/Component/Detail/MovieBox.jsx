import React from "react";
import "./Detail.css";

const MovieBox = ({ movie }) => {

    return (
        <li key={movie.movieid} className="w-1/5 mb-5 px-[10px]">
            <a className="flex-col w-full" href={`/phim/${movie.movieurl}-a${movie.movieid}`}>
                <div className="relative w-full h-full">
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
                    {movie.videoname ? (
                        <div className="absolute top-1 right-1">
                            <div className="relative w-[70px] h-[60px] flex flex-col justify-center items-center rounded-[50%] font-semibold text-white">
                                <p className="mt-[2px] text-[10px] z-20">TẬP</p>
                                <p className="mt-[-8px] font-bold text-[20px] z-20">{movie.videoname}</p>
                                <img className="absolute z-0" src="../../img/—Pngtree—explosion sticker red blast sticker_39456252.png" />
                            </div>
                        </div>
                    ) : (
                        <div className="absolute bottom-[20%] w-full bg-[#AA2121] ">
                            <p className="text-white px-4 py-1">Sắp chiếu</p>
                        </div>
                    )}

                </div>
            </a>
        </li>

    );
};

export default MovieBox;