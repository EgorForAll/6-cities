import React from "react";
import {SORT_MENU} from "../../const/const";
import propTypes from "prop-types";

const SortMenu = (props) => {
  const {sortMenuValue} = props;
  const {setSortMenuValue} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" onClick={() => setSortMenuValue(SORT_MENU.popular)}>Popular</li>
      <li className="places__option" tabIndex="2" onClick={() => setSortMenuValue(SORT_MENU.higtToLow)}>Price: high to low</li>
      <li className="places__option" tabIndex="2" onClick={() => setSortMenuValue(SORT_MENU.lowToHigh)}>Price: low to high</li>
      <li className="places__option" tabIndex="3" onClick={() => setSortMenuValue(SORT_MENU.topRatedFirst)}>Top rated first</li>
    </ul>
  );
};

SortMenu.propTypes = propTypes.string.isRequired;
export default SortMenu;
