import { useEffect, useState } from "react";

interface UseCountdownOptions {
    interval?: number;
    onTick?: () => void;
    onComplete?: () => void;
}

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
