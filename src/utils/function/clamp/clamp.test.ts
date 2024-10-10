import { act } from "@testing-library/react-hooks";
import ErrorHandler from "../../../services/error-handler.service";
import { clamp } from "./clamp";

describe("clamp", () => {


  test("should return the value if it's within the min and max range", () => {
    const result = clamp(5, 0, 10);
    expect(result).toBe(5);
  });

  test("should return the minimum value if the value is less than min", () => {
    const result = clamp(-5, 0, 10);
    expect(result).toBe(0);
  });

  test("should return the maximum value if the value is greater than max", () => {
    const result = clamp(15, 0, 10);
    expect(result).toBe(10);
  });

  test("should throw a type error when value, min, or max is not a number", () => {
    expect(() => clamp("5" as any, 1, 10)).toThrow(TypeError);
  });

  test("should throw a range error when value, min or max are passed greater than MAX_VALUE", () => {
    expect(() => clamp(1e1000, 10, 1e20000)).toThrow(RangeError);
  });

  test("should return Infinity when value, min or max are passed greater than MAX_VALUE with allowInfinity to true", () => {
    const result = clamp(1e1000, 10, 1e20000, true);
    expect(result).toEqual(Infinity);
  });
});
