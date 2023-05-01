import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

const Tabs = ({arrayOfCities}) => {
  return  arrayOfCities.map((item) => (
    <li className="locations__item" key={arrayOfCities.indexOf(item)}>
      <Link className="locations__item-link tabs__item" to={'/' + `${item.toLowerCase()}`}>
        <span>{item}</span>
      </Link>
    </li>
  ))
}

export default Tabs;
