import {capitalize} from "./capitalize";

describe('capitalize function', () => {
    it("should capitalize the first latter", () => {
        const result = capitalize("marcos");
        expect(result).toBe("Marcos");
    });

    it("should return the same string if the first latter already in capitalize", () => {
        const result = capitalize("Marcos");
        expect(result).toBe("Marcos");
    });
    it("should handle an empty string", () => {
        const result = capitalize("");
        expect(result).toBe("");
    });

    it("should return the same string if the first letter is already capitalized and convert the rest to lowercase", () => {
        const result = capitalize('hellO WoRld');
        expect(result).toBe('Hello world');
    });
    it("should throw an error for null or undefined inputs", () => {
        expect(() => capitalize(null as any)).toThrow("Input should be a string");
        expect(() => capitalize(undefined as any)).toThrow("Input should be a string");
    });
    it("should capitalize the first letter and preserve leading whitespace", () => {
        const result = capitalize("   marcos");
        expect(result).toBe("   Marcos");
    });

    it("should capitalize the first letter of a string with leading whitespace and mixed casing", () => {
        const result = capitalize("   hELLo WoRld");
        expect(result).toBe("   Hello world");
    });
});