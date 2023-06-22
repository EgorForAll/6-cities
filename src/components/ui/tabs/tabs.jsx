import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {useDispatch, useSelector} from "react-redux";
import {toToggleCity} from "../../../store/actions";
import {nameSpace} from "../../../store/root-reducer";

const Tabs = ({arrayOfCities}) => {
  const {chosenCity} = useSelector((state) => state[nameSpace.MAIN]);
  const dispatch = useDispatch();
  const onToggleCity = (city) => dispatch(toToggleCity(city));

  return arrayOfCities.map((item) => (
    <li className="locations__item" key={arrayOfCities.indexOf(item)}>
      <Link className={`locations__item-link tabs__item ${chosenCity === item ? `tabs__item tabs__item--active` : null}`} to={`/`} onClick={() => onToggleCity(item)}>
        <span>{item}</span>
      </Link>
    </li>
  ));
};

export default Tabs;


