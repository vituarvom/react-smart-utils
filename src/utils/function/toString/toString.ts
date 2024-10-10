/**
 * The function `convertToString` takes any input value and returns its string representation,
 * with error handling for non-string inputs.
 * @param {any} value - The value to be converted to a string.
 * @returns {string} The input value converted to a string using the `String` constructor.
 */

export function toString(value: any): string {
    return String(value);
}

const numResult = toString(123);        
const floatResult = toString(45.67);    
const boolResult = toString(true);       
const arrayResult = toString([1, 2, 3]); 
const objResult = toString({ key: 'value' }); 


console.log(numResult);    // "123"
console.log(floatResult);  // "45.67"
console.log(boolResult);   // "true"
console.log(arrayResult);  // "1,2,3"
console.log(objResult);    // "[object Object]"
