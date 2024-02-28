import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header&Footer/Header/Header';
import Notification from '../Home/Notification/Nontification';
import Footer from '../Header&Footer/Footer/Footer';
import Righter from '../Header&Footer/Righter/Righter';
import "./Detail.css";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const MovieDetail = () => {
    const [movieData, setMovieData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.split('-a').pop();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/phim/${id}`)
            .then(function (response) {
                console.log(response.data);
                setMovieData(response.data.movies);
                const movieUrl = response.data.movies[0].movieurl;
                navigate(`/phim/${movieUrl}-a${id}`);
            })
            .catch(function (error) {
                console.log(error);
                navigate('/not-found');
            });
    }, [id, navigate]);

    return (
        <div className="bg-[#263238]">
            <Header />
            <div className="bg-[#253238] flex justify-center">
                <div className="w-[1280px] justify-center flex-col bg-[#141414] p-[20px] mt-[130px]">
                    <Notification />
                    <div className="w-full flex">
                        <main className="w-2/3 flex-1 flex-row pt-[20px]">
                            {movieData && movieData.map((movie) => (
                                <article key={movie.id} className='w-full bg-cover bg-center bg-no-repeat rounded p-5 relative z-1' style={{ backgroundImage: `url(../../upload/background/${movie.background})` }}>
                                    <header className="w-full relative h-[200px] z-10 pl-[200px]">
                                        <h1 className='text-[#B5E745] text-[35px] font-semibold truncate'>{movie.moviename}</h1>
                                        <h2 className='text-white text-[20px] font-semibold truncate pb-2'>{movie.moviesubname}</h2>
                                        <div className="absolute top-0 left-0">
                                            <img
                                                className="w-[180px] h-[260px] object-cover rounded"
                                                src={`../../upload/poster/${movie.poster}`}
                                                alt="Movie Avatar"
                                            />
                                        </div>
                                        <div className="text-[#C0BBBD] font-semibold mb-[50px]">
                                            {movie.moviedescribe}
                                        </div>
                                    </header>
                                    <footer className="relative z-10 ml-[200px] pt-5 border-gray-400 border-t-[1px] ">
                                        <p className="flex items-center text-white font-semibold text-[14px] mt-5">
                                            <FaRegClock className="text-[#999C9A] mr-1" /><span className="mr-4">{movie.time}</span>
                                            <FaRegCalendarAlt className="text-[#999C9A] mr-1" /><span className="mr-4">{movie.release_year}</span>
                                            <BsFillEyeFill className="text-[#999C9A] mr-1" /><span className="mr-4">{movie.views} Lượt Xem</span>
                                        </p>
                                    </footer>
                                    <div className="absolute inset-0 bg-black opacity-65 rounded"></div>
                                </article>
                            ))}
                        </main>
                        <div className="ml-[20px] hidden lg:flex">
                            <Righter />
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full mt-[20px]">
                <Footer />
            </div>
        </div>
    );
};

export default MovieDetail;