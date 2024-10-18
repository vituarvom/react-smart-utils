import { isBoolean } from "./isBoolean";

describe('isBoolean', () => {
    it('should return true for true', () => {
        expect(isBoolean(true)).toBe(true);
    });

    it('should return true for false', () => {
        expect(isBoolean(false)).toBe(true);
    });

    it('should throw an error for a string', () => {
        expect(() => isBoolean('true')).toThrowError('Expected a boolean, but received: string');
    });

    it('should throw an error for a number', () => {
        expect(() => isBoolean(1)).toThrowError('Expected a boolean, but received: number');
    });

    it('should throw an error for an object', () => {
        expect(() => isBoolean({})).toThrowError('Expected a boolean, but received: object');
    });

    it('should throw an error for null', () => {
        expect(() => isBoolean(null)).toThrowError('Expected a boolean, but received: object');
    });

    it('should throw an error for undefined', () => {
        expect(() => isBoolean(undefined)).toThrowError('Expected a boolean, but received: undefined');
    });
});
