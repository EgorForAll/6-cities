import React from "react";
import {SORT_MENU} from "../../const/const";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/actions";

const SortMenu = (props) => {
  const {sortMenuValue, onChangeSortMenuStatus, onChangeSortMenuValue} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened" onMouseLeave={() => setTimeout(onChangeSortMenuStatus, 500) }>
      {Object.values(SORT_MENU).map((item) => <li key={Object.values(SORT_MENU).indexOf(item)} className={`places__option ${item === sortMenuValue ? `places__option--active` : ''}`} tabIndex={Object.values(SORT_MENU).indexOf(item)} onClick={() => {onChangeSortMenuValue(item); onChangeSortMenuStatus()}}>{item}</li>)}
    </ul>
  );
};

SortMenu.propTypes = propTypes.string.isRequired;

const mapStateToProps = (state) => ({
  sortMenuValue: state.sort_menu_value
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortMenuStatus () {
    dispatch(ActionCreator.onChangeSortMenuStatus())
  },
  onChangeSortMenuValue (value) {
    dispatch(ActionCreator.onChangeSortMenuValue(value))
  }
})

export {SortMenu};
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
