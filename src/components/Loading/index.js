import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './index.scoped.scss';

const Loading = () => {
  const isLoading = useSelector((state) => state.view.isLoading);

  const timerRef = useRef(null);

  const [display, setDisplay] = useState('none');

  useEffect(() => {
    if (isLoading) {
      setDisplay('block');
      return null;
    }
    timerRef.current = setTimeout(() => {
      setDisplay('none');
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [isLoading]);

  return (
    <div className="loading" style={{ display }}>
      <div className="container">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </div>
  );
};

export default Loading;
