import {ActionType} from "../actions";

const initialState = {
  favorites: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
