import ErrorHandler from "../../../services/error-handler.service";

/**
 * Clamps a number between a specified minimum and maximum range, with an option to allow Infinity values.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} min - The minimum allowable value.
 * @param {number} max - The maximum allowable value.
 * @param {boolean} [allowInfinity=false] - Whether to allow Infinity as a result or throw an error for large numbers.
 * @returns {number} The clamped value, ensuring it falls between the min and max.
 */
export function clamp(value: number, min: number, max: number, allowInfinity: boolean = false): number {
  const errorHandler = new ErrorHandler("clamp");
  const maxValue = Number.MAX_VALUE;

  if (
    typeof value !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number"
  ) {
    errorHandler.throwTypeError(
      "number",
      `typeof value: ${typeof value}, min: ${typeof min}, max: ${typeof max}`
    );
  }

  if (isNaN(value) || isNaN(min) || isNaN(max)) {
    errorHandler.throwTypeError(
      "number",
      `typeof value: ${typeof value}, min: ${typeof min}, max: ${typeof max}`
    );
  }

  if (min > max) {
    errorHandler.throwRangeError(
      "Minimum value cannot be greater than maximum value",
      "min > max"
    );
  }

  if (!allowInfinity) {
    if (Math.abs(value) > maxValue || Math.abs(min) > maxValue || Math.abs(max) > maxValue) {
      errorHandler.throwRangeError(
        "Input values exceed the safe number range in JavaScript",
        "value, min, or max too large"
      );
    }
  }

  return Math.max(min, Math.min(value, max));
}
