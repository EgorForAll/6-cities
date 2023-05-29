import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const StarRate = ({value, id}) => {
  const svgRef = useRef();

  return (
    <>
      <input className="htmlForm__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio" onClick={() => console.log(value)}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label htmlForm__rating-label" title="good">
        <svg ref={svgRef} className="htmlForm__star-image" width="37" height="33" id={`star__svg-${id}`}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  )
}
export default StarRate;

export const createStarsArray = () => {
  const arrayOfStars = [];
  for (let i = 1; i < 6; i++) {
    arrayOfStars.push(<StarRate key={i} value={i} id={i} />)
  }
  return arrayOfStars;
}

