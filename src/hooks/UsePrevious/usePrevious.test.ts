import { renderHook } from "@testing-library/react-hooks";
import { usePrevious } from "./usePrevious";

describe("usePrevious", () => {
  it("should return the correct previous value when changing from a number to another number", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 5 },
    });

    rerender({ value: 10 });
    expect(result.current).toBe(5);

    rerender({ value: 20 });
    expect(result.current).toBe(10);
  });

  it("should return null on the first render", () => {
    const { result } = renderHook(() => usePrevious(1));

    expect(result.current).toBeNull();
  });

  it("should return the previous value on subsequent renders", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 },
    });

    // First render
    expect(result.current).toBeNull();

    rerender({ value: 2 });
    expect(result.current).toBe(1);

    rerender({ value: 3 });
    expect(result.current).toBe(2);
  });

  it("should throw an error if the value is undefined", () => {
    const { result } = renderHook(() => usePrevious(undefined));

    expect(result.error).toEqual(
      new Error(
        'rsc: error in hook "usePrevious": Expected type defined value, but received undefined.'
      )
    );
  });

  test("should throw a hook error when value is a function", () => {
    const functionError = new Error(
      'rsc: error in hook "usePrevious": Expected type non-function value (avoid passing functions directly to usePrevious), but received function.'
    );

    const mockFunction = () => {};

    const { result } = renderHook(() => usePrevious(mockFunction));

    expect(result.error).toEqual(functionError);
  });

  test("should work with non-primitive values (arrays and objects)", () => {
    const initialObject = { key: "value" };
    const newObject = { key: "new value" };

    const { result, rerender } = renderHook((props) => usePrevious(props), {
      initialProps: initialObject,
    });

    expect(result.current).toBe(null);
    rerender(newObject);
    expect(result.current).toBe(initialObject);
  });
});
