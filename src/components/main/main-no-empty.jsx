import React, {useState} from "react";
import CardOffer from "../card-offer/card-offer";
import SortMenu from "../ui/sort-menu";
import {SORT_MENU} from "../../const/const";
import {offerValid} from "../../prop-types/offer";
import {CITIES_LIST} from "../../const/const";
import Tabs from "../ui/tabs";

const MainNoEmpty = ({offers}) => {
  const [sortMenu, openMenu] = useState(false);
  const [sortMenuValue, setSortMenuValue] = useState(SORT_MENU.popular);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES_LIST.length > 0 ? <Tabs arrayOfCities={CITIES_LIST}/> : null}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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
              {offers.map((item) => <CardOffer key={item.id} offer={item} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainNoEmpty.propTypes = offerValid;
export default MainNoEmpty;
