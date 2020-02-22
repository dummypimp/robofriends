import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card'; //default // eslint-disable-next-line
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
//import { robots } from './robots'; //not default needs destructuring // eslint-disable-next-line



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
