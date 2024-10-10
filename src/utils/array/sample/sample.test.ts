import { renderHook } from "@testing-library/react-hooks";
import sample from "./sample";  // Adjust the path to where your hook is located

describe("sample Hook", () => {
    let consoleErrorMock: jest.SpyInstance;

    beforeEach(() => {
        // Mock console.error before each test
        consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
        // Reset the mock after each test
        consoleErrorMock.mockRestore();
    });

    it("should log an error if input is not an array", () => {
        // Render the hook with a non-array value
        renderHook(() => sample("not an array" as any));

        // Check that the console.error was called
        expect(consoleErrorMock).toHaveBeenCalledWith("TypeError: Expected an array as input");
    });
});
