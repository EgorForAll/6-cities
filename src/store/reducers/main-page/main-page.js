import {SORT_MENU} from "../../../const/const";
import {createReducer} from "@reduxjs/toolkit";
import {toToggleCity, toFocusCity, toUnfocusCity, onChangeSortMenuStatus, onChangeSortMenuValue} from "../../actions";

const initialState = {
  chosenCity: `Paris`,
  activePoint: null,
  isSortMenuOpen: false,
  sortMenuValue: SORT_MENU.TOP_RATED,
  markerImage: null
}

export const MainPageReducer = createReducer(initialState, (builder) => {
  builder.addCase(toToggleCity, (state, action) => {
    state.chosenCity = action.payload;
  });
  builder.addCase(toFocusCity, (state, action) => {
    state.activePoint = action.payload;
  });
  builder.addCase(toUnfocusCity, (state) => {
    state.activePoint = null;
    state.markerImage = null;
  });
  builder.addCase(onChangeSortMenuStatus, (state) => {
    state.isSortMenuOpen = !state.isSortMenuOpen;
  });
  builder.addCase(onChangeSortMenuValue, (state, action) => {
    state.sortMenuValue = action.payload;
  });
});

