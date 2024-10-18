import { renderHook, act } from '@testing-library/react-hooks';
import { useCountdown } from './useCountdown'; // Adjust the import path as necessary

describe('useCountdown', () => {
    jest.useFakeTimers();

    it('should return null when endTime is null', () => {
        const { result } = renderHook(() => useCountdown(null));

        expect(result.current).toBe(null);
    });

    it('should count down from the given endTime', () => {
        const endTime = Date.now() + 5000; // 5 seconds from now
        const { result } = renderHook(() => useCountdown(endTime));

        expect(result.current).toBeGreaterThan(0); // should be greater than 0 at the start

        act(() => {
            jest.advanceTimersByTime(1000); // Advance timers by 1 second
        });

        expect(result.current).toBeGreaterThan(3); // Should still be greater than 3 seconds

        act(() => {
            jest.advanceTimersByTime(4000); // Advance timers by 4 more seconds
        });

        expect(result.current).toBe(0); // Should be 0 after 5 seconds
    });

    it('should call onTick and onComplete callbacks', () => {
        const onTick = jest.fn();
        const onComplete = jest.fn();
        const endTime = Date.now() + 2000; // 2 seconds from now

        const { result } = renderHook(() =>
            useCountdown(endTime, { interval: 1000, onTick, onComplete })
        );

        act(() => {
            jest.advanceTimersByTime(1000); // Advance timers by 1 second
        });

        expect(onTick).toHaveBeenCalled(); // onTick should be called after 1 second

        act(() => {
            jest.advanceTimersByTime(1000); // Advance timers by another second
        });

        expect(onComplete).toHaveBeenCalled(); // onComplete should be called after 2 seconds
    });
});
