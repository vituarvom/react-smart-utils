const flattenObject = (
  prefix: string = "",
  obj: { [key: string]: any },
  result: { [key: string]: any } = {}
): { [key: string]: any } => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newKey: string = prefix ? `${prefix}.${key}` : key;

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        flattenObject(newKey, value, result);
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
};

const obj = { a: { b: 1, c: 2 }, d: 3 };
const flattened = flattenObject("", obj);
console.log(flattened);
