import { useEffect, useState } from "react";
import { formatTime } from "../../services/common-services";

interface UseCountdownOptions {
  interval?: number;
  onTick?: () => void;
  onComplete?: () => void;
  format?:
    | "hh:mm"
    | "hh:mm:ss"
    | "mm:ss"
    | "ss"
    | ((timeInSeconds: number) => string);
}

/**
 * @param {UseCountdownOptions}  - The `useCountdown` function is a custom React hook that takes in the
 * following parameters:
 * @param {UseCountdownOptions} options - An optional object that may include:
 *   - `interval` (number): The interval in milliseconds for countdown updates (default is 1000ms).
 *   - `onTick` (function): A callback function invoked on each tick.
 *   - `onComplete` (function): A callback function invoked when the countdown reaches zero.
 *   - `format` (string or function):  Predefined format options ('hh:mm', 'hh:mm:ss', 'mm:ss', 'ss') or a custom formatting function.
 * @returns The `useCountdown` custom hook returns the current countdown value as a number or `null`.
 */
export const useCountdown = (
  endTime: number | null,
  { interval = 1000, onTick, onComplete, format }: UseCountdownOptions = {}
): string | number | null => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (endTime === null) {
      setCount(null);
      return;
    }

    if (Date.now() >= endTime) {
      setCount(0);
      if (onComplete) onComplete();
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
        setCount(Math.floor(remainingTime / 1000));
        if (onTick) onTick();
      }
    };

    updateCountdown();

    timerId = setInterval(updateCountdown, interval);

    return () => clearInterval(timerId);
  }, [endTime, interval, onTick, onComplete]);

  if (count !== null) {
    if (typeof format === "function") {
      return format(count);
    // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      return formatTime(format, count);
    }
  }

  return count;
};
