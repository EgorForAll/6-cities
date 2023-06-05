import {ActionType} from "../actions";

const initialState = {
  loaded_offers: [],
  isOffersLoaded: false,
  loaded_comments: [],
  isCommentsLoaded: false,
  newComment: null,
  commetsById: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        loaded_offers: action.payload,
        isOffersLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        loaded_comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.POST_COMMENT:
      return {
        ...state,
        newComment: action.payload
      };
    case ActionType.ADD_A_COMMENT:
      return {
        ...state,
        loaded_comments: action.payload
      };
    case ActionType.LOAD_COMMENTS_BY_ID:
      return {
        ...state,
        commetsById: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
