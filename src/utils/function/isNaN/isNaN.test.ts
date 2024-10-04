import isNotANumber from "./isNaN";

describe('isNotANumber', () => {
  it('should return true for NaN', () => {
    expect(isNotANumber(NaN)).toBe(true);
  });

  it('should return false for numbers', () => {
    expect(isNotANumber(0)).toBe(false);
    expect(isNotANumber(1)).toBe(false);
    expect(isNotANumber(-1)).toBe(false);
    expect(isNotANumber(Infinity)).toBe(false);
  });

  it('should return false for non-number types', () => {
    expect(isNotANumber('NaN')).toBe(false);
    expect(isNotANumber({})).toBe(false);
    expect(isNotANumber([])).toBe(false);
    expect(isNotANumber(null)).toBe(false);
    expect(isNotANumber(undefined)).toBe(false);
  });

  // Test cases for valid numbers
  it("should return false for valid numbers", () => {
    expect(isNotANumber(123)).toBe(false);
    expect(isNotANumber(-456)).toBe(false);
    expect(isNotANumber(0)).toBe(false);
    expect(isNotANumber(Infinity)).toBe(false);
    expect(isNotANumber(-Infinity)).toBe(false);
  });

  // Test cases for strings that represent valid numbers
  it("should return false for string numbers", () => {
    expect(isNotANumber("123")).toBe(false);
    expect(isNotANumber("0")).toBe(false);
    expect(isNotANumber("-456")).toBe(false);
  });

  // Test cases for strings that do not represent numbers
  it("should return false for non-numeric strings", () => {
    expect(isNotANumber("hello")).toBe(false);
    expect(isNotANumber("123abc")).toBe(false);
  });

  // Test cases for boolean values
  it("should return false for boolean values", () => {
    expect(isNotANumber(true)).toBe(false);
    expect(isNotANumber(false)).toBe(false);
  });

  // Test cases for special values
  it("should return true for invalid numbers like NaN", () => {
    expect(isNotANumber(Number.NaN)).toBe(true);
    expect(isNotANumber(Number("Not a Number"))).toBe(true);
  });
});
