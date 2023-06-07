import React from "react";
import Tabs from "../../ui/tabs";
import {CITIES_LIST} from "../../../const/const";
import {useSelector} from "react-redux";
import {nameSpace} from "../../../store/root-reducer";

const MainEmpty = () => {
  const {chosenCity} = useSelector((state) => state[nameSpace.MAIN]);
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES_LIST.length > 0 ? <Tabs arrayOfCities={CITIES_LIST}/> : null}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {chosenCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

export default MainEmpty;
