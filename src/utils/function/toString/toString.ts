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


const numResult = convertToString(123);
const floatResult = convertToString(45.67);
const boolResult = convertToString(true);
const arrayResult = convertToString([1, 2, 3]);
const objResult = convertToString({ key: 'value' });



console.log(numResult);    // "123"
console.log(floatResult);  // "45.67"
console.log(boolResult);   // "true"
console.log(arrayResult);  // "1,2,3"
console.log(objResult);    // "[object Object]"
