import { deepEqual } from './deepEqual';

describe('deepEqual function', () => {
    it('should return true for deeply equal objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        expect(deepEqual(obj1, obj2)).toBe(true);
    });

    it('should return false for objects with different values', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 3 } };
        expect(deepEqual(obj1, obj2)).toBe(false);
    });

    it('should return true for deeply equal arrays', () => {
        const arr1 = [1, 2, [3, 4]];
        const arr2 = [1, 2, [3, 4]];
        expect(deepEqual(arr1, arr2)).toBe(true);
    });

    it('should return false for arrays with different values', () => {
        const arr1 = [1, 2, [3, 4]];
        const arr2 = [1, 2, [4, 3]];
        expect(deepEqual(arr1, arr2)).toBe(false);
    });

    it('should return false if one value is null and the other is an object', () => {
        expect(deepEqual(null, {})).toBe(false);
        expect(deepEqual({}, null)).toBe(false);
    });

    it('should return true for identical primitive values', () => {
        expect(deepEqual(5, 5)).toBe(true);
        expect(deepEqual('hello', 'hello')).toBe(true);
    });

    it('should return false for different primitive values', () => {
        expect(deepEqual(5, 10)).toBe(false);
        expect(deepEqual('hello', 'world')).toBe(false);
    });

    it('should return true for two null values', () => {
        expect(deepEqual(null, null)).toBe(true);
    });
});
