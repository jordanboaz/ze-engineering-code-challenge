import { createStore, combineReducers } from 'redux';
import { cart, toast } from './reducers';

const rootReducer = combineReducers({
  cart,
  toast,
});

const store = createStore(rootReducer);

export { store };
