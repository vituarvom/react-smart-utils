export function capitalize(str: string): string {
    if (typeof str !== 'string') {
        throw new Error("Input should be a string");
    }
    if (str.length === 0) {
        return str;
    }
    const trimstr = str.trim();
    const capitalizedstr = trimstr.charAt(0).toUpperCase() + trimstr.slice(1).toLowerCase();
    return str.slice(0, str.length - trimstr.length) + capitalize;
};