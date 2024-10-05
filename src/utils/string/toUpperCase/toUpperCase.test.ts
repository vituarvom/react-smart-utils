import { toUpperCase } from "./toUpperCase";

describe("toUpperCase", () => {
  it("should convert lowercase string to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  it("should convert mixed-case string to uppercase", () => {
    expect(toUpperCase("HeLLo")).toBe("HELLO");
  });

  it("should handle already uppercase strings", () => {
    expect(toUpperCase("HELLO")).toBe("HELLO");
  });

  it("should handle empty string input", () => {
    expect(toUpperCase("")).toBe("");
  });

  it("should return empty string for non-string input: number", () => {
    expect(toUpperCase(123 as unknown as string)).toBe("");
  });

  it("should return empty string for non-string input: boolean", () => {
    expect(toUpperCase(true as unknown as string)).toBe("");
  });

  it("should return empty string for non-string input: object", () => {
    expect(toUpperCase({} as unknown as string)).toBe("");
  });

  it("should return empty string for non-string input: array", () => {
    expect(toUpperCase(["a", "b"] as unknown as string)).toBe("");
  });

  it("should return empty string for non-string input: null", () => {
    expect(toUpperCase(null as unknown as string)).toBe("");
  });

  it("should return empty string for non-string input: undefined", () => {
    expect(toUpperCase(undefined as unknown as string)).toBe("");
  });

  it("should not throw errors for unexpected types", () => {
    expect(() => toUpperCase(Symbol("it") as unknown as string)).not.toThrow();
  });

  it("should handle strings with special characters", () => {
    expect(toUpperCase("@hello!")).toBe("@HELLO!");
  });

  it("should handle strings with numbers", () => {
    expect(toUpperCase("123abc")).toBe("123ABC");
  });
});
