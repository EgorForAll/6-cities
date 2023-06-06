import React from "react";
import {countRating} from "../../../utils/utils";

const PropertyRating = ({offer}) => {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${countRating(offer.rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{offer.rating}</span>
   </div>
  );
};

export default PropertyRating;
