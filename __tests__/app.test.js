import React from "react";
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from "../src/components/app/app";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render MainPage when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    jest.spyOn(redux, `useDispatch`);
    jest.spyOn(redux, `useSelector`);
    const store = mockStore({
      DATA: {
        offers: [],
        isOffersLoaded: false,
        errorCode: null
      },
      FAVORITES: {
        isPosted: false
      }
    });

    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  expect(screen.getByText(/13 places to stay in Paris/i)).toBeInTheDocument();
  });

  it(`Render LoginPage when user navigate to 'login' url`, () => {
    const history = createMemoryHistory();
    history.push('/login');

    render (
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    )

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render PropertyPage when user navigate to '/offer/id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/offer/${71}`);

    const store = mockStore({
      DATA: {
        offers: []
      }
    });

    render (
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    )

    expect (screen.getByText(`The Pondhouse - A Magical Place`).toBeInTheDocument());
    expect (screen.getByText(`What's inside`).toBeInTheDocument());
    expect (screen.getByText(`Meet the host`).toBeInTheDocument());
  })
})
