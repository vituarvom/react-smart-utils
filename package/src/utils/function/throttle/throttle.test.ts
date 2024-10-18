import { throttle } from "./throttle";

describe("throttle function", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should throttle the function and call it only once in the wait interval", () => {
    const func = jest.fn();
    const throttleFunc = throttle(func, 1000);

    throttleFunc();
    throttleFunc();
    throttleFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttleFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });

  it("should delay function execution when called repeatedly within the throttle interval", () => {
    const func = jest.fn();
    const throttleFunc = throttle(func, 1000);

    throttleFunc();
    throttleFunc();
    throttleFunc();

    expect(func).toHaveBeenCalledTimes(1);

    // Move 500ms ahead, still within the throttle interval
    jest.advanceTimersByTime(500);
    throttleFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("should execute function immediately after the throttle interval has passed", () => {
    const func = jest.fn();
    const throttleFunc = throttle(func, 1000);

    throttleFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttleFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });

  it("should cancel pending throttled function execution when cancel is called", () => {
    const func = jest.fn();
    const throttleFunc = throttle(func, 1000);

    throttleFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttleFunc();
    throttleFunc.cancel();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should retain the original this context when executing the throttled function", () => {
    const context = { value: 42 };
    const func = jest.fn(function () {
      expect(this).toBe(context);
    });

    const throttleFunc = throttle(func.bind(context), 1000);

    throttleFunc();
    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test("should not execute throttled function after cancel is called midway", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc();
    throttledFunc.cancel();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test("should handle multiple throttled instances independently", () => {
    const func1 = jest.fn();
    const func2 = jest.fn();

    const throttledFunc1 = throttle(func1, 1000);
    const throttledFunc2 = throttle(func2, 500);

    throttledFunc1();
    throttledFunc2();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    // throttledFunc1 is still in throttle
    throttledFunc1();
    throttledFunc2();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(2);
  });

  test("should throw an error if the first argument is not a function", () => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expect(() => throttle(123 as any, 1000)).toThrow(TypeError);
  });

  test("should throw an error if wait time is negative", () => {
    const func = jest.fn();
    expect(() => throttle(func, -100)).toThrow(RangeError);
  });

  test("should throw an error if wait time is not a number", () => {
    const func = jest.fn();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expect(() => throttle(func, "100" as any)).toThrow(RangeError);
  });

  test("should execute the function immediately if wait time is 0", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
