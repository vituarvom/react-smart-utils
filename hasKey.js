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
