/**
 * Recursively checks if two values are deeply equal.
 *
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if both values are deeply equal, otherwise false.
 */
export function deepEqual(value1: any, value2: any): boolean {
    if (value1 === value2) return true;

    if (typeof value1 !== 'object' || typeof value2 !== 'object' || value1 === null || value2 === null) {
        return false;
    }

    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!Object.prototype.hasOwnProperty.call(value2, key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}
