import { sleep } from "./sleep";

describe("sleep function its", () => {
  it("should resolve after the specified delay", async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });

  it("should resolve immediately when given 0", async () => {
    const start = Date.now();
    await sleep(0);
    const end = Date.now();
    expect(end - start).toBeLessThan(50);
  });

  it.skip("should throw an error when given a negative number", async () => {
    await expect(sleep(-1000)).rejects.toThrow('Invalid input: ms should be a non-negative number.');
  });

  it.skip("should throw an error when given NaN", async () => {
    await expect(sleep(Number.NaN)).rejects.toThrow(Error);
  });

  it.skip("should throw an error when given a non-number type", async () => {
    await expect(sleep("1000" as unknown as number)).rejects.toThrow(TypeError);
    await expect(sleep({} as unknown as number)).rejects.toThrow(TypeError);
  });

  it.skip("should throw an error for positive Infinity input", () => {
    expect(() => sleep(Number.POSITIVE_INFINITY)).toThrow(Error);
  });

  it.skip("should throw an error for negative Infinity input", () => {
    expect(() => sleep(Number.NEGATIVE_INFINITY)).toThrow(Error);
  });
  it("should resolve correctly with a large number", async () => {
    const start = Date.now();
    await sleep(5000); // 5 seconds
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(5000);
  }, 7000);

  it("should allow multiple asynchronous calls", async () => {
    const start = Date.now();
    await Promise.all([sleep(1000), sleep(1000), sleep(1000)]);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });

  it("should handle multiple subsequent calls", async () => {
    const start = Date.now();
    await sleep(10);
    await sleep(10);
    await sleep(10);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(10);
  });

  it("should handle multiple simultaneous calls correctly", async () => {
    const start = Date.now();
    const sleepPromises = [sleep(50), sleep(50), sleep(50)];
    await Promise.all(sleepPromises);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(50);
  });
});
