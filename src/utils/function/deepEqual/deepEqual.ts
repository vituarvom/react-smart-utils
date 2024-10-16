export function deepEqual(value1: unknown, value2: unknown, depth: number = 0, seen = new WeakMap()): boolean {
    const MAX_DEPTH = 100; // You can adjust the depth limit if needed

    // Input validation to ensure parameters are objects, functions, or primitives
    if (depth > MAX_DEPTH) {
        throw new Error('Maximum depth exceeded. Possible circular reference.');
    }

    if (value1 === value2) return true; // Handle primitives and strict equality

    // If one is null/undefined and the other is not, they are not equal
    if (!value1 || !value2 || (typeof value1 !== 'object' && typeof value1 !== 'function') || 
        (typeof value2 !== 'object' && typeof value2 !== 'function')) {
        return false;
    }

    // Explicitly handle function comparisons: only return true if both functions are the same reference
    if (typeof value1 === 'function' || typeof value2 === 'function') {
        return value1 === value2;
    }

    // Circular reference detection using WeakMap
    if (seen.has(value1)) {
        return seen.get(value1) === value2;
    }
    seen.set(value1, value2);

    // Handle arrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) return false;
        return value1.every((item, index) => deepEqual(item, value2[index], depth + 1, seen));
    }

    // Enhanced: Function to get all keys, including non-enumerable properties and symbols, and sort them
    const getAllSortedKeys = (obj: object): (string | symbol)[] => 
        Reflect.ownKeys(obj).sort((a, b) => 
            a.toString().localeCompare(b.toString())
        );

    // Handle objects
    const keys1 = getAllSortedKeys(value1);
    const keys2 = getAllSortedKeys(value2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        // Use Reflect.get to properly handle symbol keys
        const val1 = Reflect.get(value1, key);
        const val2 = Reflect.get(value2, key);

        if (!deepEqual(val1, val2, depth + 1, seen)) {
            return false;
        }
    }

    return true;
}
