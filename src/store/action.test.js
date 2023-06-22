import { ActionType, toToggleCity, toFocusCity } from "./actions";

describe (`Action Creator works correctly`, () => {
  it(`Action Creator for toggle city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.TOGGLE_CITY,
      payload: 'Paris'
    }

    expect(toToggleCity(`Paris`)).toEqual(expectedAction)
  });
})
