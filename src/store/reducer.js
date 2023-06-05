import {combineReducers} from "redux";
import MainPageReducer from "./reducers/main-page";
import RatingReducer from "./reducers/rating";
import FavoritesReducer from "./reducers/favorites";
import DataReducer from "./reducers/data";
import AuthorizationReducer from "./reducers/authorization";

const nameSpace = {
  MAIN: `MAIN`,
  RATING: `RATING`,
  FAVORITES: `FAVORITES`,
  DATA: `DATA`,
  AUTHORIZATIONS: `AUTHORIZATION`
}

const rootReducer = combineReducers({
  [nameSpace.MAIN]: MainPageReducer,
  [nameSpace.RATING]: RatingReducer,
  [nameSpace.FAVORITES]: FavoritesReducer,
  [nameSpace.DATA]: DataReducer,
  [nameSpace.AUTHORIZATIONS]: AuthorizationReducer
});

export default rootReducer;
