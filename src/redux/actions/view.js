import { view } from '@/lib/actionTypes';

const { SET_LOADING_STATUS, SET_TOAST_MESSAGE } = view;

const actionCreators = {
  setLoadingStatus: (payload) => ({ type: SET_LOADING_STATUS, payload }),
  setToastMessage: (payload) => ({ type: SET_TOAST_MESSAGE, payload }),
};

export default actionCreators;
