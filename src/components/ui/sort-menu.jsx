import React from "react";
import {SORT_MENU} from "../../const/const";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {onChangeSortMenuStatus, onChangeSortMenuValue} from "../../store/actions";

const SortMenu = (props) => {
  const {sortMenuValue, onChangeSortMenuStatus, onChangeSortMenuValue} = props;
  const findID = (item) => Object.values(SORT_MENU).indexOf(item);
  const findClassName = (item) => `places__option ${item === sortMenuValue ? `places__option--active` : ``}`;
  const executeAllHandles = (item) => {
    onChangeSortMenuValue(item);
    onChangeSortMenuStatus();
  };
  return (
    <ul className="places__options places__options--custom places__options--opened" onMouseLeave={() => setTimeout(onChangeSortMenuStatus, 500) }>
      {Object.values(SORT_MENU).map((item) =>
        <li key={findID(item)} className={findClassName(item)} tabIndex={findID(item)} onClick={() => executeAllHandles(item)}>
          {item}
        </li>)};
    </ul>
  );
};

SortMenu.propTypes = propTypes.string.isRequired;

const mapStateToProps = ({MAIN}) => ({
  sortMenuValue: MAIN.sort_menu_value
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortMenuStatus() {
    dispatch(onChangeSortMenuStatus());
  },
  onChangeSortMenuValue(value) {
    dispatch(onChangeSortMenuValue(value));
  }
});

export {SortMenu};
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
