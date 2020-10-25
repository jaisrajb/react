import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [secs, setsecs] = useState(0);
  const [isActive, setIsActive] = useState();

  function start() {
    setIsActive(!isActive);
  }

  function reset() {
    setsecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setsecs(secs => secs + 1);
      }, 1000);
    } else if (!isActive && secs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, secs]);

  return (
    <div className="app">
      <div className="time">
        {secs}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={start}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;