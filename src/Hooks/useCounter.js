import { useState } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return {
    count,
    incrementCounter,
    decrementCounter,
  };
};

export default useCounter;
