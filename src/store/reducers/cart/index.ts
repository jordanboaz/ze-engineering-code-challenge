import { ADD_PRODUCT, ProductDispatch } from '../../types';

interface Action {
  type: string;
  payload: any;
}

const INITIAL_STATE: { products: ProductDispatch[] } = {
  products: [],
};

const cart = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { id, amount } = action.payload;

      const products = [...state.products];

      const indexOfProductInState = products.findIndex((el) => el.id === id);

      if (indexOfProductInState === -1) {
        //Product does not exist on cart
        return { ...state, products: [...products, { ...action.payload }] };
      } else {
        products[indexOfProductInState].amount =
          products[indexOfProductInState].amount + amount;
        return { ...state, products: [...products] };
      }

    default:
      return state;
  }
};

export { cart };
