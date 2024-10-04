function clamp(num, min, max) {
    // Check if inputs are numbers
    if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('All arguments must be numbers');
    }

    // Check if min is less than max
    if (min > max) {
        throw new RangeError('Minimum value cannot be greater than maximum value');
    }

    return Math.max(min, Math.min(num, max));
}
