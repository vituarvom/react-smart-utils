/**
 * Checks if the provided value is NaN.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Returns true if the value is NaN, otherwise false.
 *
 * @example
 * isNaN(NaN);    // true
 * isNaN(123);    // false
 */
const isNaN = (value: unknown): boolean => {
  // Use Number.isNaN to ensure the check only returns true for the actual NaN value.
  if (typeof value !== 'number') {
    return false;
  }
  
  return Number.isNaN(value)
};
export default isNaN;
