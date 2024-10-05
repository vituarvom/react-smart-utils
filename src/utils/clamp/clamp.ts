export function clamp(num: number, min: number, max: number): number {
    if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('All arguments must be numbers');
    }

    if (min > max) {
        throw new RangeError('Minimum value cannot be greater than maximum value');
    }

    return Math.max(min, Math.min(num, max));
}