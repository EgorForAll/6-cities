import {createAPI} from "../api/api";
import MockAdapter from "axios-mock-adapter";
import {ActionType} from "./actions";
import {fetchHotelsList, login} from "./api-actions";
import {redirectToRoute} from "./actions";
import {AuthorizationStatus} from "../const/const";

const api = createAPI(() => {});

describe(`Async aperation works correctly`, () => {
  it(`Should make a correct api to load hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          payload: [{fake: true}]
        })
      })
  })
  it(`Should make a correct api to post auth dates`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          payload: [{fake: true}]
        })
      })
  })

  it(`Should make a correct api to load hotels`, () => {
    // const email = 'aaa@mail.ru';
    // const password = 123456;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginAction = login([{fake: true}]);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return loginAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      })
  })
})
