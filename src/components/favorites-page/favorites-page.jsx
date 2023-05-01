import React from "react";
import Header from "../header/header";
import CardFavorite from "../card-favorite/card-favorite";
import {CITIES} from "../../const/const";
import {offerValid} from "../../prop-types/offer";

const FavoritesPage = (props) => {
  const {offers} = props;
  const renderFavoriteList = (items, location) => items.map((item) => {
    if (item.isFavorite && item.city.name === location) {
      return <CardFavorite key={item.id} offer={item}/>;
    }
  });

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers && offers.length > 0 ? renderFavoriteList(offers, CITIES.AMSTERDAM) : null}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers && offers.length > 0 ? renderFavoriteList(offers, CITIES.COLOGNE) : null}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = offerValid;
export default FavoritesPage;
