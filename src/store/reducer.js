import {offers} from "../mock/offers";
import {ActionType} from "./actions";

const initialState = {
    chosen_city: `Paris`,
    offers: offers
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return {
        ...state,
        chosen_city: action.city
      };
  }

  return state;
};
