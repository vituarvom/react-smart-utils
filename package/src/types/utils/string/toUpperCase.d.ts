// types/utils/string/toUpperCase.d.ts

declare module 'utils/string' {
    /**
     * The function `toUpperCase` takes a string input and returns the input string converted to uppercase.
     * It includes error handling for non-string inputs.
     *
     * @param {string} str - The string to be converted to uppercase.
     * @returns {string} - The input string `str` converted to uppercase using the `toUpperCase` method.
     * @throws {TypeError} - Throws an error if the input is not a string.
     */
    export function toUpperCase(str: string): string;
  }
  