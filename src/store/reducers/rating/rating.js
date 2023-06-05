import {ActionType} from "../../actions";

const initialState = {
  currentRate: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.PUT_A_RATING:
      return {
        ...state,
        currentRate: action.payload
      };
    case ActionType.RESET_A_RATING:
      return {
        ...state,
        currentRate: 0
      };
    default:
      return {
        ...state
      };
  }
};
