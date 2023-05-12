import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {offers} from './mock/offers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {comments} from './mock/comments';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} comments={comments}/>
    </Provider>,
    document.querySelector(`#root`)
);


