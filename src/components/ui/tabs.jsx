import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

const Tabs = ({arrayOfCities, selectedCity, setSelectedCity}) => {
  return arrayOfCities.map((item) => (
    <li className="locations__item" key={arrayOfCities.indexOf(item)}>
      <Link className={`locations__item-link tabs__item ${selectedCity === item ? `tabs__item tabs__item--active` : null}`} to={`/`} onClick={() => {setSelectedCity(item)}}>
        <span>{item}</span>
      </Link>
    </li>
  ));
};

export default Tabs;
