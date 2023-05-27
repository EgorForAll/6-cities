import {ActionType} from "./actions";
import {SORT_MENU, AuthorizationStatus} from "../const/const";

const initialState = {
  chosen_city: `Paris`,
  loaded_offers: [],
  loaded_comments: [],
  active_point: null,
  sort_menu_open: false,
  sort_menu_value: SORT_MENU.TOP_RATED,
  authorization_status: AuthorizationStatus.NOT_INIT,
  isOffersLoaded: false,
  isCommentsLoaded: false,
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorization_status: action.payload
      };
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
      }
    default:
      return {
        ...state
      }
  }
};
