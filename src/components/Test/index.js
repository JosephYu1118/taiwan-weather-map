import React from 'react';
import { useDispatch } from 'react-redux';

import actionCreators from '@/redux/actions/view';
import './index.scoped.scss';

const { setLoadingStatus, setToastMessage } = actionCreators;

const Test = () => {
  const dispatch = useDispatch();

  let timer = null;

  const handleSetLoading = () => {
    dispatch(setLoadingStatus(true));
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(setLoadingStatus(false));
    }, 1000);
  };

  const handleSetToast = () => {
    dispatch(setToastMessage((Math.random().toFixed(3))));
  };

  return (
    <div className="test">
      <img className="logo-react" src={require('@/assets/images/logo-react.png')} alt="" />
      <div className="logo-webpack" />
      <p className="text">文字字體測試</p>
      <div>
        <button type="button" onClick={handleSetLoading}>loading</button>
        <button type="button" onClick={handleSetToast}>toast</button>
      </div>
    </div>
  );
};

export default Test;
