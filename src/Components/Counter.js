import React from "react";
import useActions from "../Hooks/useActions";
import { EXAMPLE_ITEM } from "../Data/Util";
import {
  AppLayoutMain,
  CounterItemCount,
  Button,
  Footer,
} from "./Counter.styles";
import useInterval from "../Hooks/useInterval";

const Counter = () => {
  const { onClickIncrementItem, onClickRemoveItem, count, setCart, cart } =
    useActions(EXAMPLE_ITEM);
  const { timeOnPage } = useInterval(setCart, cart);

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
