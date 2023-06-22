import { RatingReducer } from "./rating";
import { ActionType } from "../../actions";

const state = {
  currentRate: 0
};

describe(`Reducer schould work correctly`, () => {
  it(`Reducer without additional action schould return initial state`, () => {
    expect(RatingReducer(undefined, {}))
      .toEqual({currentRate: 0})
  })
  it(`Reducer schould change current rate by given the number`, () => {
    const putRatingAction = {
      type: ActionType.PUT_A_RATING,
      payload: 3
    };

    expect(RatingReducer(state, putRatingAction)).toEqual({currentRate: 3})
  })
})
