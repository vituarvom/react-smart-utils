/**
 * The function `convertToStringconvertToString` takes any input value and returns its string representation,
 * with error handling for non-string inputs.
 * @param {any} value - The value to be converted to a string.
 * @returns {string} The input value converted to a string using the `String` constructor.
 */

export function convertToString(value: any): string {
    try {
        return String(value);
    } catch (error) {
        console.error('Error converting value to string:', error);
        return '';  
    }
}





