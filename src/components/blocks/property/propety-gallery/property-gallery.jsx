import React from "react";
import propTypes from "prop-types";

const PropertyGallery = ({images}) => {
  return (
    <div className="property__gallery">
      {images.length > 0 ? images.map((image) =>
        (<div key={images.indexOf(image)} className="property__image-wrapper">
          <img className="property__image" src={image} alt="Photo studio"/>
        </div>)
      ) : null}
    </div>
  );
};

PropertyGallery.propTypes = {
  images: propTypes.arrayOf(propTypes.string).isRequired
};

export default PropertyGallery;
