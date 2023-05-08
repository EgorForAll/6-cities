import React, {useState} from "react";
import CardOffer from "../card-offer/card-offer";
import SortMenu from "../../ui/sort-menu";
import {SORT_MENU, CITIES_LIST} from "/src/const/const";
import {offerValid} from "/src/prop-types/offer";
import Tabs from "/src/components/ui/tabs";
import Map from "../map/map";


const MainNoEmpty = ({offers}) => {
  const [selectedCity, setSelectedCity] = useState('Paris');
  const [sortMenu, openMenu] = useState(false);
  const [sortMenuValue, setSortMenuValue] = useState(SORT_MENU.popular);
  const selectedCityHotels = offers.filter((offer) => offer.city.name === selectedCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES_LIST.length > 0 ? <Tabs arrayOfCities={CITIES_LIST} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/> : null}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedCityHotels.length} places to stay in {selectedCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0" onClick={() => openMenu(!sortMenu)}>
                {sortMenuValue}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              {sortMenu ? <SortMenu sortMenuValue = {sortMenuValue} setSortMenuValue={setSortMenuValue}/> : null}
            </form>
            <div className="cities__places-list places__list tabs__content">
              {selectedCityHotels.map((item) => <CardOffer key={item.id} offer={item}/>)}
            </div>
          </section>
          <div className="cities__right-section">
            <section id="map" className="cities__map map">
              <Map city={offers[0].city}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainNoEmpty.propTypes = offerValid;
export default MainNoEmpty;
