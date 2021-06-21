import { useState } from "react";
const useCart = () => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    cart.push(item);
    return cart;
  };
  const removeItem = (item) => {
    cart.pop(item);
    return cart;
  };

  return {
    cart,
    setCart,
    addItem,
    removeItem,
  };
};

export default useCart;
