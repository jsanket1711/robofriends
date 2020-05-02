import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
//import {robots} from './robots';
import 'tachyons';
import App from './containers/App';
import {searchRobots, requestRobots} from './reducers'; 
import { createLogger } from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';

const logger = createLogger();


const rootReducers = combineReducers({searchRobots, requestRobots})
const store = 
   createStore(rootReducers, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
            <Provider store={store}>
               <App/>
            </Provider>,document.getElementById('root')
            );
serviceWorker.register();