import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import checkoutStoreReducer from './CheckoutStore';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import currentUser from './auth';
import cart from './cart'
import orders from './order'

//productsInCart must change component state name

const reducer = combineReducers({
	auth,
	products: productsReducer,
	singleProductReducer,
	productsInCart: checkoutStoreReducer,
	currentUser,
  cart,
  orders
});

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
