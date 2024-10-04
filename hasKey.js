function hasKey(obj, key) {
    
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('First argument must be a non-null object');
    }

    if (typeof key !== 'string') {
        throw new TypeError('Second argument must be a string');
    }

    if (key.trim() === '') {
        throw new Error('Key cannot be an empty string');
    }

    return Object.prototype.hasOwnProperty.call(obj, key);
}


