import { sleep } from './sleep';

describe('sleep function tests', () => {

    test('should resolve after the specified time', async () => {
        const start = Date.now();
        await sleep(1000);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(1000);
    });

    test('should resolve immediately when given 0', async () => {
        const start = Date.now();
        await sleep(0);
        const end = Date.now();
        expect(end - start).toBeLessThan(50); // Allow some tolerance for execution time
    });

    test('should throw an error when given a negative number', async () => {
        await expect(sleep(-1000)).rejects.toThrow('Invalid input: milliseconds must be a non-negative number.');
    });

    test('should throw an error when given NaN', async () => {
        await expect(sleep(NaN)).rejects.toThrow('Invalid input: milliseconds must be a non-negative number.');
    });

    test('should throw an error when given a non-number type', async () => {
        // @ts-expect-error - testing invalid argument types
        await expect(sleep("1000")).rejects.toThrow('Invalid input: milliseconds must be a non-negative number.');
        // @ts-expect-error - testing invalid argument types
        await expect(sleep({})).rejects.toThrow('Invalid input: milliseconds must be a non-negative number.');
    });

    test('should resolve correctly with a large number', async () => {
        const start = Date.now();
        await sleep(5000); // 5 seconds
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(5000);
    });

    test('should allow multiple asynchronous calls', async () => {
        const start = Date.now();
        await Promise.all([sleep(1000), sleep(1000), sleep(1000)]);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(1000);
    });

    test('should handle multiple subsequent calls', async () => {
        const start = Date.now();
        await sleep(500);
        await sleep(500);
        await sleep(500);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(1500);
    });

    test('should handle multiple simultaneous calls correctly', async () => {
        const start = Date.now();
        const sleepPromises = [sleep(1000), sleep(2000), sleep(3000)];
        await Promise.all(sleepPromises);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(3000);
    });
});
