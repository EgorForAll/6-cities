import {createReducer} from "@reduxjs/toolkit";
import {addRemoveFavorites, loadFavoritesList} from "../../actions";

const initialState = {
  favorites: [],
  isFavoritesLoaded: false,
  isPosted: false
}

export const FavoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoritesList, (state, action) => {
    state.favorites = action.payload;
    state.isFavoritesLoaded = true;
  });
  builder.addCase(addRemoveFavorites, (state) => {
    state.isPosted = !state.isPosted;
    state.isFavoritesLoaded = false;
  })
});

