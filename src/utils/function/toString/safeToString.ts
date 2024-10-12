/**
 * Converts a given value to its string representation.
 * Handles various types including string, number, boolean, null, and undefined.
 *
 * @param value - The value to be converted, which can be a string, number, boolean, null, or undefined.
 * @returns The string representation of the input value.
 *          Returns 'undefined' for undefined values.
 *          For other types, uses String() to convert.
 */

export function safeToString(value: string | number | boolean | null | undefined): string {
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';


    return String(value);
}





