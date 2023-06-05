import {combineReducers} from "redux";
import {MainPageReducer} from "./reducers/main-page/main-page";
import {RatingReducer} from "./reducers/rating/rating";
import {FavoritesReducer} from "./reducers/favorites/favorites";
import {DataReducer} from "./reducers/data/data";
import {AuthorizationReducer} from "./reducers/authorization/authorization";

export const nameSpace = {
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
