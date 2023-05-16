import React, {useState} from "react";
import {connect} from 'react-redux';
import CardOffer from "../card-offer/card-offer";
import SortMenu from "../../ui/sort-menu";
import {SORT_MENU, CITIES_LIST, CARD_MODE} from "/src/const/const";
import {offerValid} from "/src/prop-types/offer";
import Tabs from "/src/components/ui/tabs";
import Map from "../map/map";
import { ActionCreator } from "../../../store/actions";


const MainNoEmpty = (props) => {
  const {offers} = props;
  const {isOpenSortMenu} = props;
  const {onChangeSortMenu} = props;

  const chosenCity = props.chosen_city
  const selectedCityHotels = offers.filter((offer) => offer.city.name === chosenCity);
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
            <b className="places__found">{selectedCityHotels.length} places to stay in {chosenCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0" onClick={() => onChangeSortMenu()}>
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              {isOpenSortMenu ? <SortMenu /> : null}
            </form>
            <div className="cities__places-list places__list tabs__content">
              {selectedCityHotels.map((item) => <CardOffer key={item.id} offer={item} mode={CARD_MODE.MAIN_PAGE}/>)}
            </div>
          </section>
          <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={offers[0].city} points={selectedCityHotels}/>
          </section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainNoEmpty.propTypes = offerValid;

const mapStateToProps = (state) => ({
  chosen_city: state.chosen_city,
  offers: state.loaded_offers,
  isOpenSortMenu: state.sort_menu_open
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortMenu() {
    dispatch(ActionCreator.onChangeSortMenu())
  }
})

export {MainNoEmpty};

export default connect(mapStateToProps, mapDispatchToProps)(MainNoEmpty);

