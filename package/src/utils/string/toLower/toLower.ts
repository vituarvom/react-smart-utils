/**
 * Converts a given string to lowercase.
 *
 * @param {unknown} input - The input value to convert to lowercase.
 * @returns {string} - The lowercase version of the input string.
 * @throws {TypeError} - Throws if the input is not a valid string or cannot be converted.
 */
export function toLower(input: unknown): string {
    if (input === null || input === undefined) {
      throw new TypeError("Input cannot be null or undefined");
    }
  
    if (typeof input !== "string") {
      throw new TypeError("Input must be a string");
    }
  
    if (input.length === 0) {
      return input;
    }
  
    return input.toLocaleLowerCase();
  }
  