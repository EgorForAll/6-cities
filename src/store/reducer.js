import {offers} from "../mock/offers";
import {ActionType} from "./actions";

const initialState = {
  chosen_city: `Paris`,
  loaded_offers: offers,
  active_point: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return {
        ...state,
        chosen_city: action.city
      };
    case ActionType.FOCUS_CITY:
      return {
        ...state,
        active_point: action.activePoint
      };
    case ActionType.UNFOCUS_CITY:
      return {
        ...state,
        markerImage: initialState.markerImage,
        active_point: null
      };
  }

  return state;
};
