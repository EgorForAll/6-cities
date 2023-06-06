import React from "react";
import {offerValid} from "../../../../prop-types/offer";

const PropertyFeatures = ({offer}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {offer.type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {offer.bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {offer.max_adults} adults
      </li>
    </ul>
  );
};


PropertyFeatures.propTypes = offerValid;
export default PropertyFeatures;
