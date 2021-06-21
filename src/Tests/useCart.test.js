import useCart from "../Hooks/useCart";
import { act, renderHook } from "@testing-library/react-hooks";

test("Testing useCart Hook", () => {
  const { result } = renderHook(() => useCart());
  const item = {
    name: "item 1",
    description: "Is a Item",
  };

  const addItem = result.current.addItem(item);

  expect(addItem).toEqual([
    {
      name: "item 1",
      description: "Is a Item",
    },
  ]);

  const removeItem = result.current.removeItem(item);
  expect(removeItem).toEqual([]);
});
