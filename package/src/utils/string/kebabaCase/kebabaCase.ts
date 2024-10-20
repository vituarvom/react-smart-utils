export function KebabCase(str: string) {
    if (typeof str !== "string") {
        throw new TypeError("error: argument must be a string");
    }
    return str.replaceAll(" ", "-")
        .toLowerCase();
}
