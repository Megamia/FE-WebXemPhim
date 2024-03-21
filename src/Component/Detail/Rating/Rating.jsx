import React, { useState, useEffect } from "react";
import "./Rating.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rating = (props) => {
  const { movieId } = props;
  const [refreshCount, setRefreshCount] = useState(0);
  const [ratingValue, setRatingValue] = useState(null);
  const [ratingData, setRatingData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const movieid = parseInt(movieId);
  const handleRefuse = () => {
    setShowModal(false);
    setRatingValue(0);
  };
  const handleDescriptionSubmit = () => {
    // Validate description (optional)
    setShowModal(false); 
    navigate("/Login");
    window.scrollTo(0, 0);
  };
  const danhgiaroi = () => {
    toast.error("Bạn đã đánh giá rồi. Đừng spam nữa!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const danhgiathanhcong = () => {
    toast.success("Cảm ơn bạn đã đánh giá phim!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/rating/${movieid}`)
      .then(function (response) {
        console.log(response.data);
        setRatingData(response.data.ratings);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refreshCount, movieid]);

  const handleRatingChange = async (event) => {
    const storedToken = Cookies.get("token");
    const value = event.target.value;
    setRatingValue(value);
    try {
      if (storedToken) {
        const response = await axios.post(
          "http://localhost:4000/api/rating",
          {
            movieid: movieid,
            value: value,
          },
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        if (response.status === 201) {
          danhgiaroi();
        } else if (response.status === 200) {
          danhgiathanhcong();
          setRefreshCount(refreshCount + 1);
        }
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error querying the database:", error);
    }
  };

  const averageRating =
    ratingData.length > 0 ? Math.floor(ratingData[0].average_rating) : null;
  return (
    <div className="relative flex flex-col">
      <div class="star-rating">
        <div class="stars">
          <label class="number">
            <input
              type="radio"
              name="rating"
              value="0"
              // onClick={handleRatingChange}
              checked={
                // ratingValue === "0" ||
                // (ratingValue === null && averageRating === 0)
                averageRating === 0
              }
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="1"
              onClick={handleRatingChange}
              checked={
                // ratingValue === "1" ||
                // (ratingValue === null && averageRating === 1)
                averageRating === 1
              }
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="2"
              onClick={handleRatingChange}
              checked={
                // ratingValue === "2" ||
                // (ratingValue === null && averageRating === 2)
                averageRating === 2
              }
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="3"
              onClick={handleRatingChange}
              checked={
                // ratingValue === "3" ||
                // (ratingValue === null && averageRating === 3)
                averageRating === 3
              }
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="4"
              onClick={handleRatingChange}
              checked={
                // ratingValue === "4" ||
                // (ratingValue === null && averageRating === 4)
                averageRating === 4
              }
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="5"
              onClick={handleRatingChange}
              checked={
                // ratingValue === "5" ||
                // (ratingValue === null && averageRating === 5)
                averageRating === 5
              }
            />
          </label>
          <div class="number-rating"></div>
        </div>
      </div>
      {ratingData &&
        ratingData.map((rating) => (
          <div className="text-white font-semibold">
            ( {rating.average_rating}/5 từ {rating.review_count} thành viên )
          </div>
        ))}
      <div class="text-rating"></div>
      {showModal && (
        <div className="fixed z-40 inset-0 overflow-y-auto ">
          <div className="flex justify-center items-center h-full p-4 bg-gray-500 bg-opacity-75">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-medium mb-4 text-black">
                Bạn phải đăng nhập trước khi đánh giá!
              </h2>

              <div className="flex mt-4 justify-between items-center">
                <button
                  className="bg-gray-300 w-[150px] text-black p-2 rounded-md"
                  onClick={handleRefuse}
                >
                  Không
                </button>
                <button
                  className="bg-red-500 w-[150px] text-white p-2 rounded-md ml-2"
                  onClick={() => {
                    // Lưu mô tả
                    handleDescriptionSubmit();
                  }}
                >
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Rating;
