import useCounter from "../Hooks/useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

test("Testing useCounter Hook", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);

  act(() => {
    result.current.incrementCounter();
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.decrementCounter();
  });

  expect(result.current.count).toBe(0);
});
