// types/utils/string/toUpperCase.d.ts

declare module "utils/function" {
  /**
   * The `hasKey` function checks if an object has a specific key and returns a boolean value.
   * @param {object} obj - The `obj` parameter is the object that you want to check for the presence of a
   * specific key.
   * @param {string | symbol} key - The `key` parameter in the `hasKey` function is the property key
   * (string or symbol) that you want to check for existence in the given object.
   * @returns The `hasKey` function returns a boolean value indicating whether the provided object `obj`
   * has the specified key `key`.
   */
  export function hasKey(obj: object, key: string | symbol): boolean;
}
