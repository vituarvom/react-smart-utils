function isNaN(value: any): boolean {
    // Use the global isNaN function, but be careful of its quirks
    // isNaN coerces the parameter to a number before testing
    return Number.isNaN(value);
}

export default isNaN;