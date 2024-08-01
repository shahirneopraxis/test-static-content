import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <h1 className='external'>Hi, this is from the external React app</h1>}
    </div>
  );
};

export default Main;

