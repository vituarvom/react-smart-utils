type throttleCancel = {
  cancel: () => void;
};
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
export declare function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): T & throttleCancel;
