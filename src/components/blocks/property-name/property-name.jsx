import React from "react";
import FavoriteButton from "../../ui/favaorites-button";

const PropertyName = ({offer}) => {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {offer.title}
      </h1>
      <FavoriteButton offer={offer}/>
    </div>
  );
};

export default PropertyName;
