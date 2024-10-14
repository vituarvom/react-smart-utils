export function isStringEqual(str1: string | null | undefined, str2: string | null | undefined): boolean {
    if (str1 == null || str2 == null) {
        throw new Error("Both parameters must be valid strings.");
    }
    
    return str1 === str2;
}
