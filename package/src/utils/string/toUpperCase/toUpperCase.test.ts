import { toUpperCase } from "./toUpperCase";

describe("toUpperCase", () => {
  test("should convert a valid string to uppercase", () => {
    const result = toUpperCase("hello");
    expect(result).toBe("HELLO");
  });

  test("should return an empty string when input is an empty string", () => {
    const result = toUpperCase("");
    expect(result).toBe("");
  });

  test.each([
    [123],
    [true],
    [null],
    [undefined],
    [Symbol("symbol")],
    [BigInt(123)],
    [[]],
    [{} as unknown],
  ])(
    "should throw a TypeError for non-string input (%s)",
    (input) => {
      const expectedType = "string";
      const receivedType = typeof input;

      const expectedError = new TypeError(
        `rsc: error from toUpperCase: Expected type ${expectedType} but received ${receivedType}.`
      );

      expect(() => toUpperCase(input as string)).toThrow(
        expectedError
      );
    }
  );
});
