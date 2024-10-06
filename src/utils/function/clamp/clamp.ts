/**
 * Clamps a number between a specified minimum and maximum range.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} min - The minimum allowable value.
 * @param {number} max - The maximum allowable value.
 * @returns {number} The clamped value, ensuring it falls between the min and max.
 */
export function clamp(value: number, min: number, max: number): number {
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Invalid input: all parameters must be numbers');
    }

    if (min > max) {
        throw new RangeError('Minimum value cannot be greater than maximum value');
    }

    return Math.max(min, Math.min(value, max));
}