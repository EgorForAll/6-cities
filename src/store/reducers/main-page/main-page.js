import {ActionType} from "../../actions";
import {SORT_MENU} from "../../../const/const";

const initialState = {
  chosen_city: `Paris`,
  active_point: null,
  sort_menu_open: false,
  sort_menu_value: SORT_MENU.TOP_RATED,
  markerImage: null
}

export default function (state = initialState, action) {
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
    case ActionType.CHANGE_SORT_MENU_STATUS:
      return {
        ...state,
        sort_menu_open: !state.sort_menu_open
      };
    case ActionType.CHANGE_SORT_MENU_VALUE:
      return {
        ...state,
        sort_menu_value: action.newValue
      };
    default:
      return {
        ...state
      };
  }
};
