import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './api/api';
import {Provider} from 'react-redux';
import {ActionCreator} from './store/actions';
import {AuthorizationStatus} from './const/const';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middleware/redirect';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);


