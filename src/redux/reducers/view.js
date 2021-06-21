import { view } from '@/lib/actionTypes';

const { SET_LOADING_STATUS, SET_TOAST_MESSAGE } = view;

const initState = {
  isLoading: false,
  toastMessage: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_TOAST_MESSAGE: {
      return {
        ...state,
        toastMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
