import React from "react";
import useCart from "./useCart";
import useCounter from "./useCounter";
import swal from "sweetalert";
const useActions = (item) => {
  const { incrementCounter, count, decrementCounter } = useCounter();
  const { setCart, addItem, removeItem, cart } = useCart();

  const onClickIncrementItem = () => {
    setCart(addItem(item));
    incrementCounter();
  };

  const onClickRemoveItem = () => {
    if (count >= 1) {
      setCart(removeItem(item));
      decrementCounter();
    } else {
      swal("You can not remove more items ");
    }
  };

  return {
    onClickIncrementItem,
    onClickRemoveItem,
    count,
    setCart,
    cart,
  };
};

export default useActions;
