import React, { useRef } from "react";

const StarRate = ({value, id, setRate}) => {
  const svgRef = useRef();

  return (
    <>
      <input className="htmlForm__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio" onClick={() => setRate(value)}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label htmlForm__rating-label" title="good">
        <svg ref={svgRef} className="htmlForm__star-image" width="37" height="33" id={`star__svg-${id}`}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  )
}
export default StarRate;


