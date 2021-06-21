import useActions from "../../Hooks/useActions";
import { act, renderHook } from "@testing-library/react-hooks";

test("Testing useActions Hook", () => {
  const { result } = renderHook(() => useActions());

  act(() => {
    result.current.onClickIncrementItem();
    result.current.onClickRemoveItem();
  });
});
