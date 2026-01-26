/**
 * Clamps a number between a specified minimum and maximum range, with an option to allow Infinity values.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} min - The minimum allowable value.
 * @param {number} max - The maximum allowable value.
 * @param {boolean} [allowInfinity=false] - Whether to allow Infinity as a result or throw an error for large numbers.
 * @returns {number} The clamped value, ensuring it falls between the min and max.
 */
export declare function clamp(value: number, min: number, max: number, allowInfinity?: boolean): number;
