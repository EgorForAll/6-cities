import React, { useEffect, useRef } from "react";
import StarRate from "../../ui/star-rate";
import { useState } from "react";

const FormStarsRate = () => {
  const [rate, setRate] = useState(null);
  const starsWrapperRef = useRef();

  useEffect(() => {
    const svgNodeList = starsWrapperRef.current.querySelectorAll('.htmlForm__star-image');
    const svgArr = Array.prototype.slice.call(svgNodeList, 0)
    svgArr.map((item, index) => index <= rate - 1 ? item.style.fill = `#ff5c00` : item.style.fill = `#000`)
  }, [rate]);

  const createStarsRateComponents = () => {
    const arrayOfStars = [];
    for (let i = 1; i <= 5; i++) {
      arrayOfStars.push(<StarRate key={i} value={i} id={i} setRate={setRate}/>)
    }
    return arrayOfStars;
  };

  return(
  <div ref={starsWrapperRef} className="reviews__rating-htmlForm htmlForm__rating">
    {createStarsRateComponents().map((item) => item)}
  </div>
  );
};

export default FormStarsRate;
