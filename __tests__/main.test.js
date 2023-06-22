import React from "react";
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render} from "@testing-library/react";
import Main from "../src/components/pages/main-page/main";

const mockStore = configureStore();

it(`Render main page schould be correctly`, () => {
  const history = createMemoryHistory();
  history.push('/')

  render(
    <redux.Provider store={mockStore({})}>
      <Router history={history}>
        <Main />
      </Router>
      <Main />
    </redux.Provider>
  )

})
