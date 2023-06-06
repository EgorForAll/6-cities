import React from "react";
import {SORT_MENU} from "../../const/const";
import propTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {onChangeSortMenuStatus, onChangeSortMenuValue} from "../../store/actions";
import {nameSpace} from "../../store/root-reducer";

const SortMenu = () => {
  const {sortMenuValue} = useSelector((state) => state[nameSpace.MAIN]);
  const dispatch = useDispatch();
  const changeSortMenuStatus = () => dispatch(onChangeSortMenuStatus());
  const changeSortMenuValue = (value) => dispatch(onChangeSortMenuValue(value));

  const findID = (item) => Object.values(SORT_MENU).indexOf(item);
  const findClassName = (item) => `places__option ${item === sortMenuValue ? `places__option--active` : ``}`;
  const executeAllHandles = (item) => {
    changeSortMenuValue(item);
    changeSortMenuStatus();
  };
  return (
    <ul className="places__options places__options--custom places__options--opened" onMouseLeave={() => setTimeout(changeSortMenuStatus, 500) }>
      {Object.values(SORT_MENU).map((item) =>
        <li key={findID(item)} className={findClassName(item)} tabIndex={findID(item)} onClick={() => executeAllHandles(item)}>
          {item}
        </li>)};
    </ul>
  );
};

SortMenu.propTypes = propTypes.string.isRequired;

export default SortMenu;
