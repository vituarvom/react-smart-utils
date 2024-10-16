import { deepEqual } from './deepEqual'; // Adjust the import path based on your directory structure

describe('deepEqual', () => {

    // Test primitives
    it('should return true for equal primitives', () => {
        expect(deepEqual(5, 5)).toBe(true);
        expect(deepEqual('test', 'test')).toBe(true);
        expect(deepEqual(true, true)).toBe(true);
        expect(deepEqual(null, null)).toBe(true);
        expect(deepEqual(undefined, undefined)).toBe(true);
    });

    it('should return false for unequal primitives', () => {
        expect(deepEqual(5, 10)).toBe(false);
        expect(deepEqual('test', 'TEST')).toBe(false);
        expect(deepEqual(true, false)).toBe(false);
        expect(deepEqual(null, undefined)).toBe(false);
    });

    // Test arrays
    it('should return true for equal arrays', () => {
        expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(deepEqual([], [])).toBe(true);
        expect(deepEqual([null, undefined], [null, undefined])).toBe(true);
    });

    it('should return false for unequal arrays', () => {
        expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
        expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
        expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false); // Different order
    });

    // Test objects
    it('should return true for equal objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: 3 };
        expect(deepEqual(obj1, obj2)).toBe(true);
    });

    it('should return false for unequal objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, d: 3 };
        expect(deepEqual(obj1, obj2)).toBe(false);
    });

    // Test nested objects
    it('should return true for equal nested objects', () => {
        const obj1 = { a: { b: { c: 1 } } };
        const obj2 = { a: { b: { c: 1 } } };
        expect(deepEqual(obj1, obj2)).toBe(true);
    });

    it('should return false for unequal nested objects', () => {
        const obj1 = { a: { b: { c: 1 } } };
        const obj2 = { a: { b: { c: 2 } } };
        expect(deepEqual(obj1, obj2)).toBe(false);
    });

    // Test deep nesting
    it('should handle deeply nested structures', () => {
        const obj1 = { a: { b: { c: { d: { e: { f: 1 } } } } } };
        const obj2 = { a: { b: { c: { d: { e: { f: 1 } } } } } };
        expect(deepEqual(obj1, obj2)).toBe(true);
    });

    // Test different structures
    it('should return false for different types', () => {
        expect(deepEqual([1, 2, 3], { a: 1, b: 2, c: 3 })).toBe(false);
        expect(deepEqual('string', { a: 1 })).toBe(false);
    });

    // Test circular references
    it('should handle circular references', () => {
        const obj1: any = { a: 1 };
        obj1.self = obj1; // Circular reference

        const obj2: any = { a: 1 };
        obj2.self = obj2; // Circular reference

        expect(deepEqual(obj1, obj2)).toBe(true);

        const obj3: any = { a: 1 };
        obj3.self = {}; // Not the same circular reference
        expect(deepEqual(obj1, obj3)).toBe(false);
    });

    // Test different types (function vs object)
    it('should return false for function and object comparison', () => {
        const func = () => {};
        const obj = {};
        expect(deepEqual(func, obj)).toBe(false);
    });

    // Test with functions
    it('should return false for functions', () => {
        const func1 = () => {};
        const func2 = () => {};
        expect(deepEqual(func1, func2)).toBe(false); // Even if the functions are logically equal, they're different references
    });
    it('should return false for function and object comparison', () => {
        const func = () => {};
        const obj = {};
        expect(deepEqual(func, obj)).toBe(false);
    });
    
    it('should return false for functions', () => {
        const func1 = () => {};
        const func2 = () => {};
        expect(deepEqual(func1, func2)).toBe(false); // Even if the functions are logically equal, they're different references
    });
    

    // Test with undefined keys in objects
    it('should return true for objects with undefined keys', () => {
        const obj1 = { a: undefined };
        const obj2 = { a: undefined };
        expect(deepEqual(obj1, obj2)).toBe(true);
    });

    // Test with different object lengths
    it('should return false for objects with different key lengths', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1 };
        expect(deepEqual(obj1, obj2)).toBe(false);
    });

    // Test with MAX_DEPTH exceeding
    it('should throw error for exceeding max depth', () => {
        const obj1: any = {};
        let current = obj1;
        for (let i = 0; i < 101; i++) {
            current.child = {};
            current = current.child;
        }
        const obj2: any = {};
        current = obj2;
        for (let i = 0; i < 101; i++) {
            current.child = {};
            current = current.child;
        }

        expect(() => deepEqual(obj1, obj2)).toThrow('Maximum depth exceeded. Possible circular reference.');
    });
});
