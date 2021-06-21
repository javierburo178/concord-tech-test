import React, { useEffect, useState } from "react";
import useActions from "../Hooks/useActions";
import { EXAMPLE_ITEM } from "../Data/Util";
import {
  AppLayoutMain,
  CounterItemCount,
  Button,
  Footer,
} from "./Counter.styles";

const Counter = () => {
  const intervalSeconds = 30;
  const { onClickIncrementItem, onClickRemoveItem, count, setCart, cart } =
    useActions(EXAMPLE_ITEM);

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

  return (
    <>
      <AppLayoutMain>
        <CounterItemCount>{`Items in Cart ${count}`}</CounterItemCount>
        <Button onClick={onClickIncrementItem}>Add Item</Button>
        <Button onClick={onClickRemoveItem}>Remove Item</Button>
      </AppLayoutMain>
      <Footer>Time on page {timeOnPage} s</Footer>
    </>
  );
};

export default Counter;
