import { toString} from "./toString"

describe('toString', () => {
    it('should convert a number to a string', () => {
        expect(toString(123)).toBe("123");
    });

    it('should convert a float to a string', () => {
        expect(toString(45.67)).toBe("45.67");
    });

    it('should convert a boolean to a string', () => {
        expect(toString(true)).toBe("true");
        expect(toString(false)).toBe("false");
    });

    it('should convert an array to a string', () => {
        expect(toString([1, 2, 3])).toBe("1,2,3");
    });

    it('should convert an object to a string', () => {
        expect(toString({ key: 'value' })).toBe('{"key":"value"}');
    });

    it('should handle null and undefined', () => {
        expect(toString(null)).toBe("null");
        expect(toString(undefined)).toBe("undefined");
    });
});
