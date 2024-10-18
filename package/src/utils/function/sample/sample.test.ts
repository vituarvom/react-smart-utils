import { renderHook } from "@testing-library/react-hooks";
import sample from "./sample";  // Adjust the path to where your hook is located

describe("sample Hook", () => {
    let consoleErrorMock: jest.SpyInstance;

    beforeEach(() => {
        // Mock console.error before each test
        consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => { });
    });

    afterEach(() => {
        // Reset the mock after each test
        consoleErrorMock.mockRestore();
    });

    it("should return a random element from a valid array", () => {
        const array = [1, 2, 3, 4, 5];
        const { result } = renderHook(() => sample(array));
        expect(array).toContain(result.current);
    });

    it("should return undefined for an empty array", () => {
        const { result } = renderHook(() => sample([]));
        expect(result.current).toBeNull();
    });

    it("should always return the single element from a single-element array", () => {
        const { result } = renderHook(() => sample([42]));
        expect(result.current).toBe(42);
    });

    it('should return different elements over multiple calls', () => {
        const array = [1, 2, 3, 4, 5];
        const results = new Set();
        
        for (let i = 0; i < 100; i++) {  // Increased the iteration count to 100
            const { result } = renderHook(() => sample(array));
            results.add(result.current);
        }

        expect(results.size).toBeGreaterThan(1);
    });
});
