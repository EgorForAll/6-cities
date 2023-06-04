import React from "react";
import {connect} from "react-redux";
import CardOffer from "../card-offer/card-offer";
import SortMenu from "../../ui/sort-menu";
import {CITIES_LIST, CARD_MODE} from "/src/const/const";
import {offerValid} from "/src/prop-types/offer";
import Tabs from "/src/components/ui/tabs";
import Map from "../map/map";
import {SORT_MENU} from "../../../const/const";
import {ActionCreator} from "../../../store/actions";
import {expensiveFirst, chipFirst, topRatedFirst} from "../../../utils/utils";

const MainNoEmpty = (props) => {
  const {offers, isOpenSortMenu, sortMenuValue, onChangeSortMenuStatus, chosenCity} = props;
  const selectedCityHotels = offers.filter((offer) => offer.city.name === chosenCity);

  const toSortOffers = (sortType) => {
    switch (sortType) {
      case SORT_MENU.LOW_TO_HIGH:
        return selectedCityHotels.sort(expensiveFirst);
      case SORT_MENU.HIGHT_TO_LOW:
        return selectedCityHotels.sort(chipFirst);
      case SORT_MENU.TOP_RATED:
        return selectedCityHotels.sort(topRatedFirst);
      default:
        return selectedCityHotels;
    }
  };

  const sortedOffers = toSortOffers(sortMenuValue);

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
              <span style={{marginLeft: `5px`}} className="places__sorting-type" tabIndex="0" onClick={() => onChangeSortMenuStatus()}>
                {sortMenuValue}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              {isOpenSortMenu ? <SortMenu /> : null}
            </form>
            <div className="cities__places-list places__list tabs__content">
              {sortedOffers.map((item) => <CardOffer key={item.id} offer={item} mode={CARD_MODE.MAIN_PAGE}/>)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map points={selectedCityHotels}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainNoEmpty.propTypes = offerValid;

const mapStateToProps = (state) => ({
  chosenCity: state.chosen_city,
  offers: state.loaded_offers,
  isOpenSortMenu: state.sort_menu_open,
  sortMenuValue: state.sort_menu_value,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortMenuStatus() {
    dispatch(ActionCreator.onChangeSortMenuStatus());
  }
});

export {MainNoEmpty};

export default connect(mapStateToProps, mapDispatchToProps)(MainNoEmpty);

