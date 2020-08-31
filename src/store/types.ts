const ADD_PRODUCT = 'ADD_PRODUCT';
interface ProductDispatch {
  id: string;
  amount: number;
  image: string;
  title: string;
}

const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';
interface ToastState {
  show: boolean;
  message: string;
  icon: string | null;
}

const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
const INCREASE_AMOUNT = 'INCREASE_AMOUNT';

export {
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductDispatch,
  SHOW_TOAST,
  HIDE_TOAST,
  ToastState,
};
