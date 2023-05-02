import React from "react";

const PropertyGallery = ({images}) => {
  return (
    <div className="property__gallery">
      {images.length > 0 ? images.map((image) => {
        return  <div key={images.indexOf(image)} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
      }) : null}
    </div>
  );
};

export default PropertyGallery;
