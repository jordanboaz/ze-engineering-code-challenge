import {
  ADD_PRODUCT,
  ProductDispatch,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_PRODUCT,
} from '../../types';

const addProduct = (product: ProductDispatch) => {
  return {
    type: ADD_PRODUCT,
    payload: { ...product },
  };
};

const increaseAmount = (id: ProductDispatch['id']) => {
  return {
    type: INCREASE_AMOUNT,
    payload: id,
  };
};

const decreaseAmount = (id: ProductDispatch['id']) => {
  return {
    type: DECREASE_AMOUNT,
    payload: id,
  };
};

const removeProduct = (id: ProductDispatch['id']) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export { addProduct, increaseAmount, decreaseAmount, removeProduct };
