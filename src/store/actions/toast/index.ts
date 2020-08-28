import { SHOW_TOAST, ToastState, HIDE_TOAST } from '../../types';

const showToast = (toast: Omit<ToastState, 'show'>) => {
  return {
    type: SHOW_TOAST,
    payload: { ...toast },
  };
};

const hideToast = () => {
  return {
    type: HIDE_TOAST,
    payload: { show: false },
  };
};

export { showToast, hideToast };
