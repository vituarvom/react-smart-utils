import { renderHook } from "@testing-library/react";
import { useLatest } from "./useLatest";

it("should always return latest value", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useLatest(value),
      { initialProps: { value: 1 } }
    );
  
    expect(result.current.current).toBe(1);
  
    rerender({ value: 2 });
    expect(result.current.current).toBe(2);
  });
  