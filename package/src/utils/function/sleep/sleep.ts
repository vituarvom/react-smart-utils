// src/utils/function/sleep.ts
/**
 * The `sleep` function takes a number of milliseconds as input and returns a Promise that resolves
 * after the specified time has elapsed.
 * @param {number} ms - The `ms` parameter in the `sleep` function represents the number of
 * milliseconds to wait before resolving the Promise. It is a required parameter and should be a
 * non-negative number representing the time in milliseconds for the function to sleep before
 * resolving.
 * @returns A Promise that resolves after the specified number of milliseconds (ms) has elapsed.
 */

export const sleep = (ms: number): Promise<void> => {


  if (typeof ms !== "number") {
    throw new TypeError("Invalid input: ms should be a number.");
  }

  if (Number.isNaN(ms)) {
    throw new Error("Invalid input: ms should not be NaN.");
  }

  if (ms < 0) {
    throw new RangeError("Invalid input: ms should be a non-negative number.");
  }

  if (!Number.isFinite(ms)) {
    throw new Error("Invalid input: ms should be a finite number.");
  }

  return new Promise((resolve) => setTimeout(resolve, ms));
};
