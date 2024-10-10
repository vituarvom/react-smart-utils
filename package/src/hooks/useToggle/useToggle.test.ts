import {
  renderHook,
  act,
} from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle Hook", () => {
  it("should toggle between true and false", () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current[0]).toBe(false);

    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);

    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });
});
