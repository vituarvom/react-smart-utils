/**
 * The `kebabCase` function converts a string to kebab-case format by replacing spaces and non-word
 * characters with hyphens and converting to lowercase.
 * @param {string} str - The `str` parameter in the `kebabCase` function is a string that you want to
 * convert to kebab case. The function takes a string as input and converts it to kebab case by
 * following a set of rules like handling camelCase, adding hyphens between letters and digits,
 * @returns The `kebabCase` function returns a kebab-case version of the input string by following a
 * series of string manipulation steps.
 */

export function kebabCase(str: string) {
    if (typeof str !== "string") {
        throw new TypeError("error: argument must be a string");
    }
    return str.replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')  // Add hyphen between letters and digits
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')  // Add hyphen between digits and letters
    .replace(/[^\w\s-]/g, '')// Remove any non-word characters except spaces and hyphens
    .replace(/\s+/g, '-')// Replace spaces with hyphens
    .replace(/^-+|-+$/g, '')//eliminating hyphen that appear at the beginning (leading) or end (trailing) of a string.
    .toLowerCase();// Convert to lowercase
}
