import { toLower } from "./toLower";

describe('toLower', () => {
    it('convert a string to lowercase', () => {
        expect(toLower('MARCOS')).toBe('marcos');
    });

    it('handles mixed case strings', () => {
        expect(toLower('MaRCoS')).toBe('marcos');
    });

    it('return the same string if it is already lowercase', () => {
        expect(toLower('marcos')).toBe('marcos');
    });

    it('handles strings with numbers and symbols', () => {
        expect(toLower('Marcos123')).toBe('marcos123');
    });
    it('return an empty string if input is empty', () => {
        expect(toLower('')).toBe('');
    });
});