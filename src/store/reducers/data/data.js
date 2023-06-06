import {createReducer} from "@reduxjs/toolkit";
import {onLoadComments, onLoadHotels, onPostComment, addComment} from "../../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  isCommentPosted: false
};

export const DataReducer = createReducer(initialState, (builder) => {
  builder.addCase(onLoadHotels, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(onLoadComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
    state.isCommentPosted = false;
  });
  builder.addCase(onPostComment, (state) => {
    state.isCommentPosted = true;
  });
  builder.addCase(addComment, (state, action) => {
    state.comments = action.payload;
  });
});
