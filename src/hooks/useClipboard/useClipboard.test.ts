import { renderHook, act } from "@testing-library/react-hooks";
import { useClipboard } from "./useClipboard";

describe("useClipboard hook", () => {
    it("should copied true and console the copied text", () => {
        const { result } = renderHook(() => useClipboard("text"));

        expect(result.current[1]).toBe(false);

        act(() => result.current[0]());

        expect(result.current[1]).toBe(true);
    });
});