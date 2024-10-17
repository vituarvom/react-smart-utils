export function capitalize(str: string | null | undefined): string {
    if (str == null) {
        throw new Error("Input should be a string")
    }
    if (typeof str !== 'string') {
        throw new Error("Input should be a string");
    }
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};