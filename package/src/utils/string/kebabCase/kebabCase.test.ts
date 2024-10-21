import { kebabCase } from './kebabCase';

describe('kebabCase function', () => {

    // Test 1: Valid input - regular string
    it('should convert regular strings to kebab case', () => {
        expect(kebabCase("Hello World")).toBe("hello-world");
    });

    // Test 2: Valid input - camelCase string
    it('should handle camelCase strings', () => {
        expect(kebabCase("camelCaseExample")).toBe("camel-case-example");
    });

    // Test 3: Valid input - string with special characters
    it('should handle strings with special characters', () => {
        expect(kebabCase("Hello, World!")).toBe("hello-world");
    });

    // Test 4: Valid input - string with numbers
    it('should handle strings with numbers', () => {
        expect(kebabCase("File1Version2")).toBe("file-1-version-2");
    });

    // Test 5: Valid input - string with extra spaces
    it('should trim and handle extra spaces', () => {
        expect(kebabCase("  hello   world  ")).toBe("hello-world");
    });

    // Test 6: Valid input - string with leading/trailing hyphens
    it('should remove leading and trailing hyphens', () => {
        expect(kebabCase("-Hello-World-")).toBe("hello-world");
    });

    // Test 7: Invalid input - non-string input
    it('throws TypeError when input is not a string', () => {
        expect(() => kebabCase(123 as any)).toThrow(TypeError);
        expect(() => kebabCase([] as any)).toThrow(TypeError);
        expect(() => kebabCase({} as any)).toThrow(TypeError);
        expect(() => kebabCase(null as any)).toThrow(TypeError);
        expect(() => kebabCase(undefined as any)).toThrow(TypeError);
        expect(() => kebabCase(Boolean as any)).toThrow(TypeError);
    });
});

