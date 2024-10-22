export function isString(value:any):boolean {
    return typeof value === 'string';
  
}
isString('Hello World'); 
isString(123);           
isString([]);            
isString({});            