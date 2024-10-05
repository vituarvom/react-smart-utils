/**
 * Description
 * @param {any} str:string
 * @returns {any}
 */
export function toUpperCase(str: string): string {
  if (typeof str != "string") {
    console.error("Invalid parameter: Expected a string.");
    return "";
  }
  return str.toUpperCase();
}
