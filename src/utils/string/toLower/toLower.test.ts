import { toLower } from "./toLower"; 

describe('toLower', () => {
  it('should convert uppercase letters to lowercase', () => {
    expect(toLower("HELLO")).toBe("hello");
  });

  it('should convert mixed-case letters to lowercase', () => {
    expect(toLower("HeLLo WOrLD")).toBe("hello world");
  });

  it('should return the same string if it is already lowercase', () => {
    expect(toLower("hello")).toBe("hello");
  });

  it('should return the same numeric string', () => {
    expect(toLower("12345")).toBe("12345");
  });

  it('should return an empty string if input is an empty string', () => {
    expect(toLower("")).toBe("");
  });

  it('should handle strings with special characters without modification', () => {
    expect(toLower("HELLO!@#$%^&*()")).toBe("hello!@#$%^&*()");
  });

  it('should handle strings with leading/trailing whitespace', () => {
    expect(toLower("   HeLLo ")).toBe("   hello ");
  });

  it('should correctly handle locale-specific characters', () => {
    expect(toLower("İSTANBUL")).toBe("i̇stanbul"); // Turkish dotted I
  });

  it('should throw TypeError if input is null', () => {
    expect(() => toLower(null as unknown as string)).toThrowError(
      new TypeError("Input cannot be null or undefined")
    );
  });

  it('should throw TypeError if input is undefined', () => {
    expect(() => toLower(undefined as unknown as string)).toThrowError(
      new TypeError("Input cannot be null or undefined")
    );
  });

  it('should throw TypeError if input is a number', () => {
    expect(() => toLower(123 as unknown as string)).toThrowError(
      new TypeError("Input must be a string")
    );
  });

  it('should throw TypeError if input is an array', () => {
    expect(() => toLower([1, 2, 3] as unknown as string)).toThrowError(
      new TypeError("Input must be a string")
    );
  });

  it('should throw TypeError if input is an object', () => {
    expect(() => toLower({ key: "value" } as unknown as string)).toThrowError(
      new TypeError("Input must be a string")
    );
  });

  it('should throw TypeError if input is a boolean', () => {
    expect(() => toLower(true as unknown as string)).toThrowError(
      new TypeError("Input must be a string")
    );
  });

  it('should handle international characters correctly (locale-aware)', () => {
    expect(toLower("ĞÜŞİÖÇ")).toBe("ğüşi̇öç");
  });

  it('should return the same string if input is whitespace only', () => {
    expect(toLower("     ")).toBe("     ");
  });

  it('should return the string with numeric values unchanged', () => {
    expect(toLower("123AbC")).toBe("123abc");
  });

  it('should handle strings with emojis without modification', () => {
    expect(toLower("HELLO 🌟 WORLD")).toBe("hello 🌟 world");
  });
});
