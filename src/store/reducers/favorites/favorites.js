import {createReducer} from "@reduxjs/toolkit";
import {addToFavorites} from "../../actions";

const initialState = {
  favorites: []
}

export const FavoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToFavorites, (state, action) => {
    state.favorites = action.payload;
  });
});

