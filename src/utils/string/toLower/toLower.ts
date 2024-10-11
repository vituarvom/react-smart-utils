/**
 * Converts a given string to lowercase.
 * 
 * @param {string}str -The input string to convert.
 * @returns {string} - The lowercase version of the input string.
 */

export function toLower(str:string):string{
    if(typeof str !=='string'){
        throw new TypeError('input must be a string');
    }
    if(str===null || str === undefined){
        throw new TypeError('input cannot be null or undefined')
    };
    return str.toLocaleLowerCase();
};
