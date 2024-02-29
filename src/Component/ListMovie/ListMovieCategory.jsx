import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header&Footer/Header/Header';
import Notification from '../Home/Notification/Nontification';
import Footer from '../Header&Footer/Footer/Footer';
import Righter from '../Header&Footer/Righter/Righter';
import MovieBox from '../Detail/MovieBox';

const ListMovieCategory = () => {
  const { page, category } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(2);
  const scrollRef = useRef();

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

  useEffect(() => {
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    navigate(`/danh-muc/${category}/${pageNumber}`);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieData.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="bg-[#263238]">
      <Header />
      <div className="bg-[#253238] flex  justify-center">
        <div className="md:max-w-[1280px] w-full  justify-center flex-col bg-[#141414] p-[20px] mt-[130px] rounded">
          <Notification />
          <div className="w-full table table-fixed">
            <div ref={scrollRef} className="w-full lg:table-cell flex-row bg-[#141414]">
              <div className="flex w-full justify-center mt-4 mb-4 relative lg:left-[-10px]">
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
                          const pageNumber = index + 1;
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
                <ul className="flex w-full flex-wrap relative lg:left-[-10px]">
                  {currentMovies.map((movie) => (
                   <MovieBox key={movie.movieid} movie={movie} />
                  ))}
                </ul>
              </div>
              <div className="flex w-full justify-center relative lg:left-[-10px]">
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
                          const pageNumber = index + 1;
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
            <div className=" lg:table-cell align-top w-[300px] ">
              <Righter />
            </div>
          </div>
        </div>
      </div>
      {/* <Catalog/> */}
      <div className="w-full  mt-[20px] ">
        <Footer />
      </div>
    </div>
  );
};

export default ListMovieCategory;