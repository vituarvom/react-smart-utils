type throttleCancel = { cancel: () => void };
/**
 * The `throttle` function in TypeScript allows you to limit the rate at which a function can be
 * called.
 * @param {T} func - The `func` parameter in the `throttle` function is the function that you want to
 * throttle. This function will be called at most once within the specified `wait` time interval.
 * @param {number} wait - The `wait` parameter in the `throttle` function represents the time interval
 * in milliseconds that must elapse before the original function `func` can be called again. This
 * interval helps in limiting the frequency of function calls to prevent overwhelming the system with
 * rapid invocations.
 * @returns The `throttle` function returns a new function that wraps the original function provided as
 * an argument. This new function has additional functionality to throttle the execution of the
 * original function based on a specified time interval (`wait` parameter). The returned function also
 * has a `cancel` method that can be used to cancel the throttling and allow immediate execution of the
 * original function on the next call.
 */

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): T & throttleCancel {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function as the first argument");
  }

  if (typeof wait !== "number" || wait < 0) {
    throw new RangeError("Wait time must be a positive number");
  }

  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: unknown = null;

  const throttled = function (this: unknown, ...args: Parameters<T>): void {
    const now = Date.now();
    lastThis = this;

    if (now - lastCall < wait) {
      if (timeoutId) clearTimeout(timeoutId);
      lastArgs = args;

      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        timeoutId = null;
        if (lastArgs) {
          func.apply(lastThis, lastArgs);
          lastArgs = null;
        }
      }, wait - (now - lastCall));
    } else {
      lastCall = now;
      func.apply(this, args);
    }
  };

  throttled.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
    lastCall = 0;
    lastArgs = null;
  };

  return throttled as T & throttleCancel;
}
