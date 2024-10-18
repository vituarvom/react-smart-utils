export function isBoolean(value: any): value is boolean {
    if (typeof value === 'boolean') {
        return true;
    } else {
        throw new Error(`Expected a boolean, but received: ${typeof value}`);
    }
}
