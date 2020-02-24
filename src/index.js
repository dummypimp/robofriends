import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; //middleware
import './index.css';
import thunkMiddleware from 'redux-thunk';
//import Card from './Card'; //default // eslint-disable-next-line
import App from './containers/App';
import 'tachyons';
//import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
//import { robots } from './robots'; //not default needs destructuring // eslint-disable-next-line

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
