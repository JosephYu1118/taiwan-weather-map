import React, { useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actionCreators from '@/redux/actions/view';
import './index.scoped.scss';

const Toast = () => {
  const dispatch = useDispatch();

  const toastMessage = useSelector((state) => state.view.toastMessage);

  const timerRef = useRef(null);

  const setToastMessage = useCallback(() => {
    dispatch(actionCreators.setToastMessage(''));
  }, [dispatch]);

  useEffect(() => {
    if (!toastMessage || timerRef.current) return null;
    timerRef.current = setTimeout(() => {
      setToastMessage();
    }, 1500);

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [toastMessage, setToastMessage]);

  return (
    <div className="toast" style={{ display: toastMessage ? 'block' : 'none' }}>
      <p>{toastMessage}</p>
    </div>
  );
};

export default Toast;
