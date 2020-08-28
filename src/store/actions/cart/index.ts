import { ADD_PRODUCT, ProductDispatch } from '../../types';

const addProduct = (product: ProductDispatch) => {
  return {
    type: ADD_PRODUCT,
    payload: { ...product },
  };
};

export { addProduct };
