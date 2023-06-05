import {SORT_MENU} from "../../../const/const";
import {createReducer} from "@reduxjs/toolkit";
import {toToggleCity, toFocusCity, toUnfocusCity, onChangeSortMenuStatus, onChangeSortMenuValue} from "../../actions";

const initialState = {
  chosen_city: `Paris`,
  active_point: null,
  sort_menu_open: false,
  sort_menu_value: SORT_MENU.TOP_RATED,
  markerImage: null
}

export const MainPageReducer = createReducer(initialState, (builder) => {
  builder.addCase(toToggleCity, (state, action) => {
    state.chosen_city = action.payload;
  });
  builder.addCase(toFocusCity, (state, action) => {
    state.active_point = action.payload;
  });
  builder.addCase(toUnfocusCity, (state) => {
    state.active_point = null;
    state.markerImage = null;
  });
  builder.addCase(onChangeSortMenuStatus, (state) => {
    state.sort_menu_open = !state.sort_menu_open;
  });
  builder.addCase(onChangeSortMenuValue, (state, action) => {
    state.sort_menu_value = action.payload;
  });
});

