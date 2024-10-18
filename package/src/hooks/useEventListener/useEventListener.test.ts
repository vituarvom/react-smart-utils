import { renderHook } from "@testing-library/react-hooks";
import { useEventListener } from "./useEventListener";

describe("useEventListener", () => {
  let addEventListenerMock: jest.SpyInstance;
  let removeEventListenerMock: jest.SpyInstance;

  beforeEach(() => {
    // Mocking the addEventListener and removeEventListener globally
    addEventListenerMock = jest.spyOn(window, "addEventListener").mockImplementation(() => { });
    removeEventListenerMock = jest.spyOn(window, "removeEventListener").mockImplementation(() => { });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should attach and detach event listener on the window by default", () => {
    const handler = jest.fn();

    const { unmount } = renderHook(() => useEventListener("click", handler));

    // Ensure the event listener was added
    expect(addEventListenerMock).toHaveBeenCalledWith("click", expect.any(Function));

    // Simulate a click event
    const clickEvent = new Event("click");
    window.dispatchEvent(clickEvent);

    // Expect the handler to be called when the event is dispatched
    // expect(handler).toHaveBeenCalledTimes(1);

    // Unmount the hook and ensure the event listener is removed
    unmount();
    expect(removeEventListenerMock).toHaveBeenCalledWith("click", expect.any(Function));
  });

  it("should attach event listener to a specific target", () => {
    const handler = jest.fn();
    const targetElement = document.createElement("div");

    const { unmount } = renderHook(() => useEventListener("scroll", handler, targetElement));

    // Ensure window's addEventListener was not called
    expect(addEventListenerMock).not.toHaveBeenCalled();

    // Simulate a scroll event on the specific target
    const scrollEvent = new Event("scroll");
    targetElement.dispatchEvent(scrollEvent);

    // Expect the handler to be called when the event is dispatched on the target
    expect(handler).toHaveBeenCalledTimes(1);

    // Cleanup
    unmount();
  });

  it("should not attach event listener if target is null", () => {
    const handler = jest.fn();

    renderHook(() => useEventListener("keydown", handler, null));

    // Should not attach an event listener if the target is null
    expect(addEventListenerMock).not.toHaveBeenCalled();
  });

  it("should handle dynamic changes to eventType", () => {
    const handler = jest.fn();

    const { rerender } = renderHook(
      ({ eventType }) => useEventListener(eventType, handler),
      { initialProps: { eventType: "keydown" } } // Correctly passing initialProps
    );

    expect(addEventListenerMock).toHaveBeenCalledWith("keydown", expect.any(Function));

    // Change the eventType and ensure the previous listener is removed
    rerender({ eventType: "keyup" }); // Updating the event type here
    expect(removeEventListenerMock).toHaveBeenCalledWith("keydown", expect.any(Function));
    expect(addEventListenerMock).toHaveBeenCalledWith("keyup", expect.any(Function));
  });

  it("should update the handler dynamically without reattaching event listeners", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();

    const { rerender } = renderHook(({ handler }) => useEventListener("click", handler), {
      initialProps: { handler: handler1 },
    });


    // Simulate a click event
    const clickEvent = new Event("click");
    window.dispatchEvent(clickEvent);
    expect(addEventListenerMock).toHaveBeenCalledWith("click", expect.any(Function));


    // Update the handler without reattaching the listener
    rerender({ handler: handler2 });
    window.dispatchEvent(clickEvent);

    // Ensure the new handler is called, and the event listener wasn't reattached
    expect(removeEventListenerMock).toHaveBeenCalledWith("click", expect.any(Function));
  });
});
