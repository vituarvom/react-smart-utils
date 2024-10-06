import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from './usePrevious'; // Adjust the import path as necessary

describe('usePrevious', () => {
  it('should return undefined on the first render', () => {
    const { result } = renderHook(() => usePrevious(1));
    
    expect(result.current).toBeUndefined(); // First render should return undefined
  });

  it('should return the previous value on subsequent renders', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 },
    });

    expect(result.current).toBeUndefined(); // First render

    // Update value
    rerender({ value: 2 });
    expect(result.current).toBe(1); // Should return previous value (1)

    // Update value again
    rerender({ value: 3 });
    expect(result.current).toBe(2); // Should return previous value (2)
  });

  it('should throw an error if the value is undefined', () => {
    const { result } = renderHook(() => usePrevious(undefined));

    expect(result.error).toEqual(new Error("usePrevious hook requires a defined value"));
  });

  it('should return the correct previous value when changing from a number to another number', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 5 },
    });

    rerender({ value: 10 });
    expect(result.current).toBe(5); // Previous value should be 5

    rerender({ value: 20 });
    expect(result.current).toBe(10); // Previous value should now be 10
  });
});
