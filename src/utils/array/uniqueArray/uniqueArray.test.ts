import { uniqueArray } from './uniqueArray';

describe('uniqueArray', () => {
    it('should return an array with unique values', () => {
        expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should return an empty array if input is empty', () => {
        expect(uniqueArray([])).toEqual([]);
    });

    it('should handle arrays with mixed types', () => {
        expect(uniqueArray([1, '1', 2, '2', 1, '1'])).toEqual([1, '1', 2, '2']);
    });

    it('should handle arrays with complex objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        expect(uniqueArray([obj1, obj1, obj2])).toEqual([obj1, obj2]);
    });
});
