import {
  ADD_PRODUCT,
  ProductDispatch,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_PRODUCT,
} from '../../types';

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
      break;

    case INCREASE_AMOUNT:
      const deepCopyProducts = [...state.products];
      const productIndex = deepCopyProducts.findIndex(
        (eachProduct) => eachProduct.id === action.payload
      );
      if (productIndex > -1) {
        deepCopyProducts[productIndex].amount =
          deepCopyProducts[productIndex].amount + 1;
      }
      return { ...state, products: [...deepCopyProducts] };
      break;
    case DECREASE_AMOUNT:
      const deepCopyProducts2 = [...state.products];
      const productIndex2 = deepCopyProducts2.findIndex(
        (eachProduct) => eachProduct.id === action.payload
      );
      if (productIndex2 > -1) {
        if (deepCopyProducts2[productIndex2].amount > 0) {
          deepCopyProducts2[productIndex2].amount =
            deepCopyProducts2[productIndex2].amount - 1;
        }
      }
      return { ...state, products: [...deepCopyProducts2] };
      break;

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (eachProduct) => eachProduct.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { cart };
