import { MainPageReducer } from "./main-page";
import { ActionType } from "../../actions";
import { SORT_MENU } from "../../../const/const";
const state = {
  chosenCity: 'Paris',
  activePoint: null,
  isSortMenuOpen: false,
  sortMenuValue: SORT_MENU.TOP_RATED,
  markerImage: null
};

describe(`Reducers work correctly`, () => {
  it(`Reducers without additional parametrs should return initial state`, () => {
    expect(MainPageReducer(undefined, {}))
      .toEqual({
        chosenCity: 'Paris',
        activePoint: null,
        isSortMenuOpen: false,
        sortMenuValue: SORT_MENU.TOP_RATED,
        markerImage: null
      })
  })
  it (`Reducer schould toggle city by given the city`, () => {
    const toggleCityAction = {
      type: ActionType.TOGGLE_CITY,
      payload: `Cologne`
    };

    expect(MainPageReducer(state, toggleCityAction)).toEqual({
      chosenCity: 'Cologne',
      activePoint: null,
      isSortMenuOpen: false,
      sortMenuValue: SORT_MENU.TOP_RATED,
      markerImage: null
    });
  })
})
