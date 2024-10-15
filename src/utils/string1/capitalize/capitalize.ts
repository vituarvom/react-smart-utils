export function capitalize(str: string): string {
    if (typeof str !== 'string') {
        throw new Error("Input should be a string");
    }
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase()+str.slice(1).toLowerCase();
};