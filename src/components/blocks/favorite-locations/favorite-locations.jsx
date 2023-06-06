import React from "react";
import {Link} from "react-router-dom";
import {CLIENT_PATHES} from "../../../const/const";
import CardFavorite from "../card-favorite/card-favorite";

const FavoriteLocations = ({favorites, city}) => {
  const isCityInFavorites = favorites.some((offer) => offer.city.name === city);
  return (
    <>
    {isCityInFavorites ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" href={CLIENT_PATHES.MAIN}>
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.length ? favorites.map((item, index) => <CardFavorite offer={item} key={index}/>) :null}
        </div>
      </li> :
          <h2 style={{position: `absolute`, margin: `auto`}}>You don't have saved offers</h2>}
    </>

  );
};

export default FavoriteLocations;
