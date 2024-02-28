import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header&Footer/Header/Header';
import Notification from '../Home/Notification/Nontification';
import Footer from '../Header&Footer/Footer/Footer';
import Righter from '../Header&Footer/Righter/Righter';
import MovieBox from '../Detail/MovieBox';

const NewMovie = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(15);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/movie');
        setMovieData(response.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    navigate(`/phim-moi/${pageNumber}`);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieData.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="bg-[#263238]">
      <Header />
          <div className="bg-[#253238] flex  justify-center">
            <div className="w-[1280px] justify-center flex-col bg-[#141414] p-[20px] mt-[130px] rounded">
              <Notification />
              <div className="w-full flex">
                <div ref={scrollRef} className="w-full flex-row bg-[#141414]">
                  <div className="flex w-full justify-center mt-4 mb-4 relative left-[-10px]">
                    {movieData.length > moviesPerPage && (
                      <nav className="w-full">
                        <ul className="pagination w-full flex justify-center">
                          <li
                            className="page-item bg-[#212527] w-auto h-[40px] rounded flex justify-center items-center m-1 text-[#78909C] font-bold p-3"
                          >
                            Trang {currentPage} của {Math.ceil(movieData.length / moviesPerPage)}
                          </li>
                          <li
                            className="page-item bg-[#212527] w-[100px] h-[40px] rounded flex justify-center m-1 text-[#78909C] font-bold hover:bg-[#B5E745] hover:text-white"
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                          >
                            <button className="page-link">
                              Trang Đầu
                            </button>
                          </li>
                          {Array.from({ length: Math.min(4, Math.ceil(movieData.length / moviesPerPage)) }, (_, index) => {
                            const totalPages = Math.ceil(movieData.length / moviesPerPage);
                            if (page && parseInt(page) > totalPages) {
                              navigate('/not-found'); // Chuyển hướng đến trang Error404
                              return null; // Ngừng render component hiện tại
                            }
                            if (currentPage > totalPages - 3 && totalPages > 4) {
                              const pageNumber = totalPages - 4 + index + 1;
                              return (
                                <li
                                  className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                  key={index}
                                >
                                  <button
                                    className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                  >
                                    {pageNumber}
                                  </button>
                                </li>
                              );
                            }
                            if (totalPages <= 4) {
                              const pageNumber = totalPages - 3 + index + 1;
                              return (
                                <li
                                  className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                  key={index}
                                >
                                  <button
                                    className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                  >
                                    {pageNumber}
                                  </button>
                                </li>
                              );
                            }
                            const pageNumber = currentPage > 2 ? currentPage - 1 + index : index + 1;
                            return (
                              <li
                                className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                key={index}
                              >
                                <button
                                  className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                  onClick={() => handlePageChange(pageNumber)}
                                >
                                  {pageNumber}
                                </button>
                              </li>
                            );
                          })}
                          <li
                            className="page-item bg-[#212527] w-[100px] h-[40px] rounded flex justify-center m-1 text-[#78909C] font-bold hover:bg-[#B5E745] hover:text-white"
                            onClick={() => handlePageChange(Math.ceil(movieData.length / moviesPerPage))}
                            disabled={currentPage === Math.ceil(movieData.length / moviesPerPage)}
                          >
                            <button className="page-link">
                              Trang Cuối
                            </button>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                  <div className="flex w-full">
                    <ul className="flex w-full flex-wrap relative left-[-10px]">
                      {currentMovies.map((movie) => (
                        <MovieBox key={movie.movieid} movie={movie} />
                        // <li key={movie.movieid} className="w-1/5 mb-5 px-[10px]">
                        //   <a className="block w-full" href="/#">
                        //     <div>
                        //       <img
                        //         className="w-[200px] flex justify-center rounded"
                        //         src={`../../upload/poster/${movie.poster}`}
                        //         alt="Movie Avatar"
                        //       />
                        //     </div>
                        //     <span className="text-white flex justify-center capitalize">{movie.moviename}</span>
                        //     <span className="text-[#7D7D7D] flex justify-center text-[13px]">Lượt xem: {movie.views}</span>
                        //   </a>
                        // </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex w-full justify-center relative left-[-10px]">
                    {movieData.length > moviesPerPage && (
                      <nav className="w-full">
                        <ul className="pagination w-full flex justify-center">
                          <li
                            className="page-item bg-[#212527] w-auto h-[40px] rounded flex justify-center items-center m-1 text-[#78909C] font-bold p-3"
                          >
                            Trang {currentPage} của {Math.ceil(movieData.length / moviesPerPage)}
                          </li>
                          <li
                            className="page-item bg-[#212527] w-[100px] h-[40px] rounded flex justify-center m-1 text-[#78909C] font-bold hover:bg-[#B5E745] hover:text-white"
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                          >
                            <button className="page-link">
                              Trang Đầu
                            </button>
                          </li>
                          {Array.from({ length: Math.min(4, Math.ceil(movieData.length / moviesPerPage)) }, (_, index) => {
                            const totalPages = Math.ceil(movieData.length / moviesPerPage);
                            if (currentPage > totalPages - 3 && totalPages > 4) {
                              const pageNumber = totalPages - 4 + index + 1;
                              return (
                                <li
                                  className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                  key={index}
                                >
                                  <button
                                    className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                  >
                                    {pageNumber}
                                  </button>
                                </li>
                              );
                            }
                            if (totalPages <= 4) {
                              const pageNumber = totalPages - 3 + index + 1;
                              return (
                                <li
                                  className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                  key={index}
                                >
                                  <button
                                    className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                  >
                                    {pageNumber}
                                  </button>
                                </li>
                              );
                            }
                            const pageNumber = currentPage > 2 ? currentPage - 1 + index : index + 1;
                            return (
                              <li
                                className="page-item bg-[#212527] w-[40px] h-[40px] rounded flex justify-center m-1 text-[#78909C] text-[18px] font-bold hover:bg-[#B5E745] hover:text-white"
                                key={index}
                              >
                                <button
                                  className={`page-link rounded w-full ${currentPage === pageNumber ? 'active bg-[red] text-white' : ''}`}
                                  onClick={() => handlePageChange(pageNumber)}
                                >
                                  {pageNumber}
                                </button>
                              </li>
                            );
                          })}
                          <li
                            className="page-item bg-[#212527] w-[100px] h-[40px] rounded flex justify-center m-1 text-[#78909C] font-bold hover:bg-[#B5E745] hover:text-white"
                            onClick={() => handlePageChange(Math.ceil(movieData.length / moviesPerPage))}
                            disabled={currentPage === Math.ceil(movieData.length / moviesPerPage)}
                          >
                            <button className="page-link">
                              Trang Cuối
                            </button>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>
                <div className=" flex justify-end ">
                  <Righter />
                </div>
              </div>
            </div>
          </div>
      <div className="w-full  mt-[20px] ">
        <Footer />
      </div>
    </div>
  );
};

export default NewMovie;