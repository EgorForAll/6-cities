import React from "react";

const PropertyPrice = ({offer}) => {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{offer.price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
};

export default PropertyPrice;
