import { kebabCase } from "./kebabCase";

describe("KebabCase function", () => {
    
    it("should convert a regular string with spaces to kebab-case", () => {
        expect(kebabCase("hello world")).toBe("hello-world");
    });

    it("should return the original string if there are no spaces", () => {
        expect(kebabCase("helloworld")).toBe("helloworld");
    });

    it("should handle multiple spaces", () => {
        expect(kebabCase("hello   world")).toBe("hello---world");
    });

    it("should throw a TypeError if the input is not a string", () => {
        expect(() => kebabCase(123 as any)).toThrow(TypeError);
    });
});