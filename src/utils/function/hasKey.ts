/**
 * Checks if an object has a specific key as its own property.
 *
 * @param {object} obj - The object to check.
 * @param {string | symbol} key - The key to check for.
 * @returns {boolean} True if the key exists as an own property, false otherwise.
 */
export function hasKey(obj: object, key: string | symbol): boolean {
    // Check if the first parameter is an object
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('First argument must be an object');
    }
    
    // Check if the second parameter is a string or symbol
    if (typeof key !== 'string' && typeof key !== 'symbol') {
        throw new TypeError('Second argument must be a string or symbol');
    }
    
    return Object.prototype.hasOwnProperty.call(obj, key);
}
