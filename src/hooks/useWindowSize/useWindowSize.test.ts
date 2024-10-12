/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import { useWindowSize } from "./useWindowSize";

const originalWindow = { ...window };

beforeAll(() => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 800,
  });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 600,
  });
});

afterEach(() => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: originalWindow.innerWidth,
  });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: originalWindow.innerHeight,
  });
});

describe("useWindowSize", () => {
  it("should initialize with correct window size", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });

  it("should update window size on resize", () => {
    const { result } = renderHook(() => useWindowSize());

    window.innerWidth = 1024;
    window.innerHeight = 768;
    window.dispatchEvent(new Event("resize"));

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it("should not update state excessively due to throttling", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useWindowSize());

    window.innerWidth = 1024;
    window.innerHeight = 768;
    window.dispatchEvent(new Event("resize"));

    window.innerWidth = 1200;
    window.innerHeight = 900;
    window.dispatchEvent(new Event("resize"));

    jest.advanceTimersByTime(100);

    expect(result.current.width).toBe(1200);
    expect(result.current.height).toBe(900);

    jest.useRealTimers();
  });

  it("should handle non-finite window dimensions gracefully", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
    const { result } = renderHook(() => useWindowSize());

    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: Number.NaN,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: Number.POSITIVE_INFINITY,
    });
    window.dispatchEvent(new Event("resize"));

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Received non-finite dimensions for window size:",
      {
        newWidth: Number.NaN,
        newHeight: Number.POSITIVE_INFINITY,
      }
    );

    expect(result.current.width).toBe(originalWindow.innerWidth);
    expect(result.current.height).toBe(originalWindow.innerHeight);

    consoleWarnSpy.mockRestore();
  });

  it("should handle server-side rendering gracefully", () => {
    jest
      .spyOn(global, "window", "get")
      .mockReturnValue(undefined as unknown as Window & typeof globalThis);

    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(0);
    expect(result.current.height).toBe(0);

    jest.spyOn(global, "window", "get").mockRestore();
  });

  it("should clean up the event listener on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useWindowSize());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
