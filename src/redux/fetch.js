import axios from 'axios';

import actionCreators from '@/redux/actions/view';

const { setLoadingStatus } = actionCreators;

const fetch = (
  apiUrl,
  [resolveAction, rejectAction],
  method = 'post',
  haveGlobalLoading = true,
) => (payload) => async (dispatch) => {
  if (haveGlobalLoading) {
    dispatch(setLoadingStatus(true));
  }
  try {
    const response = method === 'post'
      ? await axios.post(apiUrl, payload)
      : await axios.get(`${apiUrl}${payload || ''}`);
    dispatch(resolveAction(response));
  } catch (error) {
    if (rejectAction) {
      dispatch(rejectAction(error));
    }
  } finally {
    if (haveGlobalLoading) {
      dispatch(setLoadingStatus(false));
    }
  }
};

export default fetch;
