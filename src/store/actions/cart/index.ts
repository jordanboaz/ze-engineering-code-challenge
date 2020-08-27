import { ADD_PRODUCT } from '../../types'

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {id: 'carro', amount: 5}
  }
}

export { addProduct };