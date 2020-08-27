import { ADD_PRODUCT } from '../../types'
const INITIAL_STATE = {
  products: []
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case ADD_PRODUCT:
      const { id, amount } = action.payload;

      // let prod = {}
      const indexProductInState = state.products.findIndex((el) => el.id === id);
      // if(indexProductInState){
      //   const productInState = state.products[indexProductInState];
      //   prod = {...productInState, amount: productInState.amount + quantity};
      // }

      console.log(id, amount, indexProductInState)

      return {...state}
    default:
      return state;
  }
}

export { cart };