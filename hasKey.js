function hasKey(obj, key){
    // this is for to check the first parameter must be object
    if (typeof obj !== 'object' || obj === null) {
         throw new TypeError('First argument must be an object');
     }
     // this is for to check the first parameter must be string
     if (typeof key !== 'string' ||  key === null || key === undefined) {
         throw new TypeError('Second argument must be a string');
     }
    
     return Object.prototype.hasOwnProperty.call(obj, key);
     
     }
