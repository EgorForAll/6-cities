import {createReducer} from "@reduxjs/toolkit";
import {onLoadComments, onLoadHotels, onPostComment, addComment} from "../../actions";

const initialState = {
  loaded_offers: [],
  isOffersLoaded: false,
  loaded_comments: [],
  isCommentsLoaded: false,
  isCommentPosted: false,
  newComment: null
};

export const DataReducer = createReducer(initialState, (builder) => {
  builder.addCase(onLoadHotels, (state, action) => {
    state.loaded_offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(onLoadComments, (state, action) => {
    state.loaded_comments = action.payload;
    state.isCommentsLoaded = true;
    state.isCommentPosted = false;
  });
  builder.addCase(onPostComment, (state, action) => {
    state.newComment = action.payload;
    state.isCommentPosted = true;
  });
  builder.addCase(addComment, (state, action) => {
    state.loaded_comments = action.payload;
  });
});
