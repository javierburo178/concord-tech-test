import { useEffect, useState } from "react";
const useInterval = (setCart, cart) => {
  const intervalSeconds = 30;
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage((timeOnPage) => timeOnPage + intervalSeconds);
      updateItems(cart);
    }, intervalSeconds * 1000);
    return () => clearInterval(interval);
  }, []);

  const updateItems = (cartItems) => {
    setCart(cartItems);
  };
  return {
    timeOnPage,
  };
};

export default useInterval;
