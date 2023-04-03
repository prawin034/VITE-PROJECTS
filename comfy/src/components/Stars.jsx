import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  console.log(stars, reviews);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill color="yellow" />
        ) : stars >= number ? (
          <BsStarHalf color="yellow" />
        ) : (
          <BsStar color="yellow" />
        )}
      </span>
    );
  });

  return (
    <div className="stars">
      <div className="stars_component">
        {/**stars */}
        {tempStars}
      </div>

      <div className="stars_reviews">
        <span className="stars_reviews_title">
          ({reviews} Customer reviews){' '}
        </span>
      </div>
    </div>
  );
};

export default Stars;
