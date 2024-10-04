// src/utils/function/sleep.ts

/**
 * Pauses execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified delay.
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Example usage:
async function example() {
    console.log("Pausing for 1 second...");
    await sleep(1000); // Pauses for 1 second
    console.log("Resumed after 1 second.");
}
