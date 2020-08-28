const ADD_PRODUCT = 'ADD_PRODUCT';
interface ProductDispatch {
  id: string;
  amount: number;
  image: string;
  title: string;
}

const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';
interface ToastState {
  show: boolean;
  message: string;
  icon: string | null;
}

export { ADD_PRODUCT, ProductDispatch, SHOW_TOAST, HIDE_TOAST, ToastState };
