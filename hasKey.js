function hasKey(obj, key){
    // Check if the first parameter is an object
    if (typeof obj !== 'object' || obj === null) {
         throw new TypeError('First argument must be an object');
     }
    // Check that the second parameter is a string
     if (typeof key !== 'string' ||  key === null || key === undefined) {
         throw new TypeError('Second argument must be a string');
     }
    
     return Object.prototype.hasOwnProperty.call(obj, key);
     
     }

     try {
        console.log(hasKey({ a: 1, b: 2 }, 'a'));  // true
        console.log(hasKey({ a: 1, b: 2 }, 'c'));  // false
        console.log(hasKey(null, 'a'));              // Throws error
        console.log(hasKey({ a: 1 }, ''));           // Throws error
        console.log(hasKey({ a: 1 }, 123));          // Throws error
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }