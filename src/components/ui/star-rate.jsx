import React from "react";

const StarRate = () => {
  return (
    <>
      <input className="htmlForm__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
      <label htmlFor="4-stars" className="reviews__rating-label htmlForm__rating-label" title="good">
        <svg className="htmlForm__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  )
}
export default StarRate;

export const createStarsArray = () => {
  const arrayOfStars = [];
  for (let i = 0; i < 5; i++) {
    arrayOfStars.push(<StarRate key={i} />)
  }
  return arrayOfStars;
}

