function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

console.log(hasKey({ a: 1, b: 2 }, 'a'));  
console.log(hasKey({ a: 1, b: 2 }, 'c'));  
console.log(hasKey({ name: "vighnesh", age: 25 }, 'name')); 