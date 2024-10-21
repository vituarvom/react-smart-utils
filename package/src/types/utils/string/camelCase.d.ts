// types/utils/string/camelCase.d.ts

declare module 'utils/string' {
    /**
     * The function `camelCase` takes a string input and converts it to camelCase format.
     * It trims the input string, splits it into words, and converts it to camelCase where
     * the first word is lowercase and each subsequent word starts with an uppercase letter.
     * It also includes error handling for non-string inputs.
     *
     * @param {string} str - The string to be converted to camelCase.
     * @returns {string} - The input string `str` converted to camelCase format.
     * @throws {TypeError} - Throws an error if the input is not a string.
     */
    export function camelCase(str: string): string;
}
