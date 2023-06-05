import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import { getChosenCity } from "../../store/reducers/main-page/selector";

const Tabs = ({arrayOfCities, onToggleCity, chosenCity}) => {

  return arrayOfCities.map((item) => (
    <li className="locations__item" key={arrayOfCities.indexOf(item)}>
      <Link className={`locations__item-link tabs__item ${chosenCity === item ? `tabs__item tabs__item--active` : null}`} to={`/`} onClick={() => onToggleCity(item)}>
        <span>{item}</span>
      </Link>
    </li>
  ));
};


const mapStateToProps = (state) => ({
  chosenCity: getChosenCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleCity(city) {
    dispatch(ActionCreator.toggleCity(city));
  },
});

export {Tabs};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);


