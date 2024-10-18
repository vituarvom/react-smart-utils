import ErrorHandler from "../../../services/error-handler.service";

/**
 * The function `toUpperCase` takes a string input and returns the input string converted to uppercase,
 * with error handling for non-string inputs.
 * @param {string} str - string
 * @returns the input string `str` converted to uppercase using the `toUpperCase` method.
 */
export function toUpperCase(str: string): string {
  const errorHandler = new ErrorHandler("toUpperCase");

  if (typeof str !== "string") {
    errorHandler.throwError("TypeError", "string", str);
  }
  return str.toUpperCase();
}