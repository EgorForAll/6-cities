import React from "react";
import PropertyText from "../../../ui/property-text";

const PropertyHost = ({offer}) => {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {offer.host.name}
        </span>
        <span className="property__user-status">
          {offer.host.is_pro ? `Pro` : null}
        </span>
      </div>
      <div className="property__description">
        <PropertyText text={offer.description}/>
      </div>
    </div>
  );
};

export default PropertyHost;
