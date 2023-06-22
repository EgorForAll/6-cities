import React from "react";
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";
import Login from "../src/components/pages/login-page/login";
import userEvent from '@testing-library/user-event';

const mockStore = configureStore();

it(`Login page should render correctly`, () => {
  const history = createMemoryHistory();
  history.push('/login');

  render(
    <redux.Provider store={mockStore({})}>
      <Router history={history}>
        <Login />
      </Router>
    </redux.Provider>
);

  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `eia.web.ss@gmail.com`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/eia.web.ss@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
})
