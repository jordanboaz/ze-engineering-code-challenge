import { SHOW_TOAST, HIDE_TOAST, ToastState } from '../../types';

interface Action {
  type: string;
  payload: any;
}

const INITIAL_STATE: ToastState = {
  show: false,
  message: '',
  icon: null,
};

const toast = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return { ...state, ...action.payload, show: true };
    case HIDE_TOAST:
      return { ...state, ...INITIAL_STATE, show: false };
    default:
      return state;
  }
};

export { toast };
