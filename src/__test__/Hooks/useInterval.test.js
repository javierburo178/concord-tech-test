import useInterval from "../../Hooks/useInterval";
import { act, renderHook } from "@testing-library/react-hooks";

test("Testing useInterval Hook", () => {
  const setCart = jest.fn();
  const cart = [];
  const { result } = renderHook(() => useInterval(setCart, cart));
  expect(result.current.timeOnPage).toBe(0);

  const cartItems = [
    {
      name: "new",
      description: "this is new",
    },
  ];
  act(() => {
    result.current.updateItems(cartItems);
  });
});
