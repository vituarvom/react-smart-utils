import { clamp } from './clamp';

describe('clamp function', () => {
    it('should return the number when within range', () => {
        expect(clamp(1e20, 1e10, 1e15)).toBe(1e15);
    });

    it('should return the minimum value when the number is below the range', () => {
        expect(clamp(0, 1, 10)).toBe(1);
    });

    it('should return the maximum value when the number is above the range', () => {
        expect(clamp(15, 1, 10)).toBe(10);
    });

    it('should throw a TypeError if non-number arguments are passed', () => {
        expect(() => clamp('5' as any, 1, 10)).toThrow(TypeError);
    });

    it('should throw a RangeError if min is greater than max', () => {
        expect(() => clamp(5, 10, 1)).toThrow(RangeError);
    });
});
