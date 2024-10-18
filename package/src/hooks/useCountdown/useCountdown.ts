import { useEffect, useState } from "react";

interface UseCountdownOptions {
    interval?: number;
    onTick?: () => void;
    onComplete?: () => void;
}

/**
 * The `useCountdown` function in TypeScript is a custom hook that handles countdown functionality
 * based on a specified end time with optional callbacks for tick updates and completion.
 * @param {number | null} endTime - The `endTime` parameter represents the timestamp in milliseconds
 * when the countdown should end. If `endTime` is `null`, the countdown will not be active.
 * @param {UseCountdownOptions}  - The `useCountdown` function is a custom React hook that takes in the
 * following parameters:
 * @returns The `useCountdown` custom hook returns the current countdown value as a number or `null`.
 */
export const useCountdown = (
    endTime: number | null,
    { interval = 1000, onTick, onComplete }: UseCountdownOptions = {}
): number | null => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        if (!endTime) {
            setCount(null);
            return;
        }

        let timerId: NodeJS.Timeout;

        const updateCountdown = () => {
            const now = Date.now();
            const remainingTime = endTime - now;

            if (remainingTime <= 0) {
                setCount(0);
                clearInterval(timerId);
                if (onComplete) onComplete();
            } else {
                setCount(Math.max(0, Math.floor(remainingTime / 1000)));
                if (onTick) onTick();
            }
        };

        updateCountdown();
        timerId = setInterval(updateCountdown, interval);
        return () => clearInterval(timerId);
    }, [endTime, interval, onTick, onComplete]);

    return count;
};
