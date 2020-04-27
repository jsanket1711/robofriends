import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider,connect } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
//import {robots} from './robots';
import 'tachyons';
import App from './containers/App';
import {searchRobots} from './reducers'; 
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); 

ReactDOM.render(
                <provider store={store}>
                   <App /> 
                </provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
