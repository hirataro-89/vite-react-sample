import { useState } from 'react';

export const Button = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  }
  return (
    <>
      {flag ? (
        <button type="button" className="button" onClick={handleClick}>true</button>
      ) : (
        <button type="button" className="button" onClick={handleClick}>false</button>
      )}
    </>
  )
};
