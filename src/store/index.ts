import {createStore, combineReducers} from 'redux';
import {cart} from './reducers'

const rootReducer = combineReducers({
  cart
});

const store = createStore(rootReducer);

export { store };