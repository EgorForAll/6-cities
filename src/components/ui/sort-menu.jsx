import React from "react";
import {SORT_MENU} from "../../const/const";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/actions";

const SortMenu = (props) => {


  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" onClick={() => {}}>Popular</li>
      <li className="places__option" tabIndex="2" onClick={() => {}}>Price: high to low</li>
      <li className="places__option" tabIndex="2" onClick={() => {}}>Price: low to high</li>
      <li className="places__option" tabIndex="3" onClick={() => {}}>Top rated first</li>
    </ul>
  );
};

SortMenu.propTypes = propTypes.string.isRequired;

const mapStateToProps = (state) => ({
  isOpen: state.sort_menu_open
});

const mapDispatchToProps = (dispatch) => ({
  onSortMenu () {
    dispatch(ActionCreator.onOpenSortMenu)
  }
})

export {SortMenu};
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
