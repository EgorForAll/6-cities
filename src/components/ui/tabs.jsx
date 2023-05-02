import React from "react";
import {Link, useRouteMatch} from "react-router-dom/cjs/react-router-dom.min";

const Tabs = ({arrayOfCities}) => {
  const match = useRouteMatch();
  return  arrayOfCities.map((item) => (
    <li className="locations__item" key={arrayOfCities.indexOf(item)}>
      <Link className="locations__item-link tabs__item" to={`/main-page-` + `${item.toLowerCase()}`}>
        <span>{item}</span>
      </Link>
    </li>
  ));
};

export default Tabs;
