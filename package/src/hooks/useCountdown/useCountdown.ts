import { useEffect, useState, useRef } from "react";
import { formatTime } from "../../services/common-services";

type FormatOptions =
  | "hh:mm"
  | "hh:mm:ss"
  | "mm:ss"
  | "ss"
  | ((timeInSeconds: number) => string);

interface UseCountdownOptions {
  interval?: number;
  onTick?: () => void;
  onComplete?: () => void;
  format?: FormatOptions;
}

interface CountdownControls {
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  increaseTime: (seconds: number) => void;
  decreaseTime: (seconds: number) => void;
}

/**
 * useCountdown hook to create a countdown timer with extra functionalities like pause, reset, and more.
 *
 * @param {number} initialTimeInSeconds - The initial countdown time in seconds.
 * @param {UseCountdownOptions} options - Optional settings like interval, onTick, onComplete, and format.
 *   - `interval` (number): The interval in milliseconds for countdown updates (default is 1000ms).
 *   - `onTick` (function): A callback function invoked on each tick.
 *   - `onComplete` (function): A callback function invoked when the countdown reaches zero.
 *   - `format` (string or function):  Predefined format options ('hh:mm', 'hh:mm:ss', 'mm:ss', 'ss') or a custom formatting function.
 *
 *
 *  @param {CountdownControls} countdownControls - Optional settings like interval, onTick, onComplete, and format.
 *   - `start` (function): To start the timer
 *   - `pause` (function): To pause the timer
 *   - `resume` (function): To resume the timer
 *   - `reset` (function):   To reset the timer
 *   - `increaseTime` ((x: number) => {}):   To increase the timer by x seconds
 *   - `decreaseTime` ((x: number) => {}):   To decrease the timer by x seconds
 *
 *
 * @returns [formattedTime, countdownControls] - Countdown time and control functions.
 */
export const useCountdown = (
  initialTimeInSeconds: number,
  { interval = 1000, onTick, onComplete, format }: UseCountdownOptions = {}
): [string | number | null, CountdownControls] => {
  const [count, setCount] = useState<number>(initialTimeInSeconds);
  const [paused, setPaused] = useState<boolean>(true);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    const updateCountdown = () => {
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(timerId.current as NodeJS.Timeout);
          if (onComplete) onComplete();
          return 0; // Stop at 0
        }
        if (onTick) onTick();
        return prevCount - 1; // Decrement the count
      });
    };

    timerId.current = setInterval(updateCountdown, interval);
    return () => {
      clearInterval(timerId.current as NodeJS.Timeout);
    };
  }, [paused, interval, onTick, onComplete]);

  // Start the countdown
  const start = () => {
    if (count > 0) {
      setPaused(false);
    }
  };

  // Pause the countdown
  const pause = () => {
    setPaused(true);
    clearInterval(timerId.current as NodeJS.Timeout);
  };

  // Reset the countdown to the initial state
  const reset = () => {
    clearInterval(timerId.current as NodeJS.Timeout);
    setCount(initialTimeInSeconds); // Reset to initial time
    setPaused(true); // Ensure it's paused
  };

  // Increase time by X seconds
  const increaseTime = (seconds: number) => {
    setCount((prevCount) => Math.max(0, prevCount + seconds)); // Ensure non-negative
  };

  // Decrease time by X seconds (without going below 0)
  const decreaseTime = (seconds: number) => {
    setCount((prevCount) => Math.max(0, prevCount - seconds)); // Ensure non-negative
  };

  // Format and return the countdown value and control functions
  const formattedTime =
    typeof format === "function"
      ? format(count)
      : typeof format === "string"
      ? formatTime(format, count)
      : count;

  return [
    formattedTime,
    { start, pause, resume: start, reset, increaseTime, decreaseTime },
  ];
};
