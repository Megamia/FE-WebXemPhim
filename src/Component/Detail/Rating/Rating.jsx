import React, { useState, useEffect } from "react";
import "./Rating.css";
import axios from "axios";

const Rating = (props) => {
  const { movieId } = props;
  const [ratingValue, setRatingValue] = useState(null);
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/rating/${movieId}`)
      .then(function (response) {
        console.log(response.data);
        setRatingData(response.data.ratings);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [movieId]);
  const handleRatingChange = (event) => {
    const value = event.target.value;
    setRatingValue(value);
  };
  const averageRating = ratingData.length > 0 ? Math.floor(ratingData[0].average_rating) : null;
  return (
    <div className="relative flex flex-col">
      <div class="star-rating">
        <div class="stars">
          <label class="number">
            <input
              type="radio"
              name="rating"
              value="0"
              onClick={handleRatingChange}
              checked={ratingValue === "0" || (ratingValue === null && averageRating === 0)}
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="1"
              onClick={handleRatingChange}
              checked={ratingValue === "1" || (ratingValue === null && averageRating === 1)}
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="2"
              onClick={handleRatingChange}
              checked={ratingValue === "2" || (ratingValue === null && averageRating === 2)}
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="3"
              onClick={handleRatingChange}
              checked={ratingValue === "3" || (ratingValue === null && averageRating === 3)}
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="4"
              onClick={handleRatingChange}
              checked={ratingValue === "4" || (ratingValue === null && averageRating === 4)}
            />
          </label>
          <label class="star">
            <input
              type="radio"
              name="rating"
              value="5"
              onClick={handleRatingChange}
              checked={ratingValue === "5" || (ratingValue === null && averageRating === 5)}
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
    </div>
  );
};

export default Rating;
