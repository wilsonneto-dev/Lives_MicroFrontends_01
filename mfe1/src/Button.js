import React, { useState } from 'react';

const Button = ({ callback }) => { 
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => callback(current => current +1)}>MFE1 Button {count}</button>
  )
};

export default Button;
