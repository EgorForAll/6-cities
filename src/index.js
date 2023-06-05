import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './api/api';
import {Provider} from 'react-redux';
import {ActionCreator} from './store/actions';
import {AuthorizationStatus} from './const/const';
import rootReducer from './store/root-reducer';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middleware/redirect';
import {requireAuthorization} from './store/actions';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);


