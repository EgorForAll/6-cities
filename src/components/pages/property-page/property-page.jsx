import React, {useEffect} from "react";
import Header from "../../layout/header/header";
import NearPlaces from "../../blocks/property/near-places/near-places";
import PropertyHost from "../../blocks/property/property-host/property-host";
import PropertyFeatures from "../../blocks/property/property-features/property-features";
import PropertyPrice from "../../blocks/property/property-price/property-price";
import PropertyInside from "../../blocks/property/property-inside/property-inside";
import PropertyRating from "../../blocks/property/property-rating/property-rating";
import PropertyReview from "../../blocks/property/property-reviews/property-review";
import PropertyName from "../../blocks/property/property-name/property-name";
import PropertyMark from "../../blocks/property/property-mark/property-mark";
import PropertyGallery from "../../blocks/property/propety-gallery/property-gallery";
import Map from "../../blocks/map/map";
import {findOffer} from "../../../utils/utils";
import {useSelector} from "react-redux";
import {nameSpace} from "../../../store/root-reducer";

const PropertyPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [window.location.href]);
  const {offers} = useSelector((state) => state[nameSpace.DATA]);
  const currentOffer = findOffer(offers);
  const currentCity = currentOffer.city.name;
  const nearOffersByCity = offers.filter((offer) => offer.city.name === currentCity && offer !== currentOffer);
  const nearOffers = nearOffersByCity.slice(0, 3);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={currentOffer.images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium ? <PropertyMark/> : null}
              <PropertyName offer={currentOffer}/>
              <PropertyRating offer={currentOffer}/>
              <PropertyFeatures offer={currentOffer}/>
              <PropertyPrice offer={currentOffer}/>
              <PropertyInside offer={currentOffer}/>
              <PropertyHost offer={currentOffer}/>
              <PropertyReview offer={currentOffer}/>
            </div>
          </div>
          <section className="property__map map">
            <div style={{width:`1144px`, height:`100%`, margin: `0 auto`}}>
              <Map city={currentOffer.city} points={nearOffers}/>
            </div>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces offers={nearOffers}/>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
