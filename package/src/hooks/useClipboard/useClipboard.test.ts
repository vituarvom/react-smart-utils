import { renderHook, act } from "@testing-library/react-hooks";
import { useClipboard } from "./useClipboard";

describe("useClipboard hook", () => {
  it("should set 'copied' to true when text is copied", async () => {
    const mockWriteText = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    const textToCopy = "test text";
    const { result } = renderHook(() => useClipboard(textToCopy));

    expect(result.current[1]).toBe(false);

    await act(async () => {
      await result.current[0]();
    });

    expect(result.current[1]).toBe(true);
    expect(mockWriteText).toHaveBeenCalledWith(textToCopy);
  });
});