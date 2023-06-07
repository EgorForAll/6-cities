import {createReducer} from "@reduxjs/toolkit";
import {onLoadComments, onLoadHotels, onPostComment, addComment, handleError} from "../../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  isCommentPosted: false,
  errorCode: null
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
  builder.addCase(handleError, (state, action) => {
    state.errorCode = action.payload;
  })
});
