import React from "react";
import CardOffer from "../../card-offer/card-offer";
import {CARD_MODE} from "../../../../const/const";

const NearPlaces = ({offers}) => {

  return (
    <div className="near-places__list places__list">
      {offers.map((item) => <CardOffer key={item.id} offer={item} mode={CARD_MODE.PROPERTY_PAGE}/>)}
    </div>
  );
};

export default NearPlaces;
