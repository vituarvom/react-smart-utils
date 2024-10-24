import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from './useDebounce'; // Adjust the path according to your project structure

describe('useDebounce', () => {
    jest.useFakeTimers();

    it('should return the initial value', () => {
        const { result } = renderHook(() => useDebounce('initial', 500));
        expect(result.current).toBe('initial');
    });

    it('should update the debounced value after the specified delay', () => {
        const { result } = renderHook(() => useDebounce('test', 500));

        // Initial value
        expect(result.current).toBe('test');

        // Fast-forward time
        act(() => {
            jest.advanceTimersByTime(500);
        });

        // After the delay, the value should remain the same
        expect(result.current).toBe('test');
    });

    it('should not update debounced value before delay', () => {
        const { result, rerender } = renderHook((value) => useDebounce(value, 500), {
            initialProps: 'first',
        });

        // Initial value
        expect(result.current).toBe('first');

        // Change the value before the delay
        rerender('second');

        // Fast-forward time without reaching the delay
        act(() => {
            jest.advanceTimersByTime(250);
        });

        // Value should still be the first one
        expect(result.current).toBe('first');

        // Fast-forward time to complete the delay
        act(() => {
            jest.advanceTimersByTime(250);
        });

        // After the delay, the value should now be updated
        expect(result.current).toBe('second');
    });

    it('should clear timeout on unmount', () => {
        const { unmount } = renderHook(() => useDebounce('test', 500));

        // Fast-forward time
        act(() => {
            jest.advanceTimersByTime(500);
        });

        // Unmounting the hook
        unmount();

        // The timeout should be cleared, so no state update occurs
        expect(setTimeout).not.toHaveBeenCalled();
    });
});
