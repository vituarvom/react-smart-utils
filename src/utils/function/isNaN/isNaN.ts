/**
 * Checks if the provided value is NaN.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} Returns true if the value is NaN, otherwise false.
 *
 * @example
 * isNaN(NaN);    // true
 * isNaN(123);    // false
 */
function isNaN(value: any): boolean {
    // Use Number.isNaN to ensure the check only returns true for the actual NaN value.
    return Number.isNaN(value);
  }
  
  export default isNaN;
  