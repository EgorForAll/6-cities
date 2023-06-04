import React from "react";
import propTypes from "prop-types";

const PropertyText = ({text}) => {

  return (
    <p className="property__text">
      {text}
    </p>
  );
};


PropertyText.propTypes = {
  text: propTypes.string.isRequired
};

export default PropertyText;
