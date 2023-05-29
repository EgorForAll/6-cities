import React from "react";
import { createStarsArray } from "../../ui/star-rate";

const FormStarsRate = () => {
  return(
  <div className="reviews__rating-htmlForm htmlForm__rating">
    {createStarsArray().map((item) => item)}
  </div>
  );
};

export default FormStarsRate;
