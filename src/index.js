import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {appartments} from './mock/appartments';

ReactDOM.render(
    <App appartments={appartments}/>,
    document.querySelector(`#root`)
);


