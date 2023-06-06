import React from "react";
import FavoriteLocations from "../favorite-locations/favorite-locations";
import {CITIES} from "../../../const/const";
import {nameSpace} from "../../../store/root-reducer";
import {useSelector} from "react-redux";

const FavoriteList = () => {
  const {favorites} = useSelector((state) => state[nameSpace.FAVORITES]);
  const arrayOfCities = Object.values(CITIES);
  const filteredOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);
  return (
    <ul className="favorites__list">
      {arrayOfCities.map((item, index) => <FavoriteLocations city={item} favorites={filteredOffers(favorites, item)} key={index}/>)}
    </ul>
  );
};

export default FavoriteList;
