import { KebabCase } from "./kebabaCase";

describe("KebabCase function", () => {
    
    it("should convert a regular string with spaces to kebab-case", () => {
        expect(KebabCase("hello world")).toBe("hello-world");
    });

    it("should return the original string if there are no spaces", () => {
        expect(KebabCase("helloworld")).toBe("helloworld");
    });

    it("should handle multiple spaces", () => {
        expect(KebabCase("hello   world")).toBe("hello---world");
    });

    it("should throw a TypeError if the input is not a string", () => {
        expect(() => KebabCase(123 as any)).toThrow(TypeError);
    });
});