
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
//import thunkMiddleware from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import auth from './auth';


//const reducer = combineReducers({ auth, singleProductReducer });

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import checkoutStoreReducer from './CheckoutStore'
import productsReducer from './products'
import singleProductReducer from './singleProduct';
import usersReducer from './users'
import singleUserReducer from './singleUserByAdmin'

//productsInCart must change component state name

const reducer = combineReducers({ auth,
  products: productsReducer,
  singleProductReducer,
  productsInCart: checkoutStoreReducer,
  users: usersReducer,
  user: singleUserReducer

})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
