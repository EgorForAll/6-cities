import {createReducer} from "@reduxjs/toolkit";
import {onPutRating, resetRating} from "../../actions";

const initialState = {
  currentRate: 0
}

export const RatingReducer = createReducer(initialState, (builder) => {
  builder.addCase(onPutRating, (state, action) => {
    state.currentRate = action.payload;
  });
  builder.addCase(resetRating, (state) => {
    state.currentRate = 0;
  });
});

