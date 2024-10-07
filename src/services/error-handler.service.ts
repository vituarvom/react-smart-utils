type ErrorType =
  | "TypeError"
  | "RangeError"
  | "ReferenceError"
  | "SyntaxError"
  | "Error";

type PrimitiveType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "undefined"
  | "symbol"
  | "bigint";

type NonPrimitiveType =
  | "object"
  | "Function"
  | "Array"
  | "Date"
  | "RegExp"
  | "Map"
  | "Set"
  | "Promise"
  | "Error";

type Type = NonPrimitiveType | PrimitiveType;

/**
 * A class for handling errors in a structured and reusable way.
 * It supports different types of errors and generates dynamic messages.
 */
class ErrorHandler {
  private functionName: string;

  constructor(functionName: string) {
    this.functionName = functionName;
  }

  /**
   * Generates and throws an error with a dynamic message.
   *
   * @param {ErrorType} errorType - The type of the error to throw.
   * @param {string} expectedType - The expected data type or condition.
   * @param {any} receivedValue - The actual value that caused the error.
   */
  public throwError(
    errorType: ErrorType,
    expectedType: string,
    receivedValue: any
  ): never {
    const actualType = typeof receivedValue;
    const errorMessage = `rsc: error from ${this.functionName}: Expected type ${expectedType} but received ${actualType}.`;

    const errorClasses: { [key in ErrorType]: new (message: string) => Error } = {
      TypeError,
      RangeError,
      ReferenceError,
      SyntaxError,
      Error,
    };
    const ErrorConstructor = errorClasses[errorType] || Error;
    throw new ErrorConstructor(errorMessage);
  }

  /**
   * Throws a TypeError with a dynamic message.
   * @param {string} expectedType - The expected data type or condition.
   * @param {any} receivedValue - The actual value that caused the error.
   */
  public throwTypeError(expectedType: Type, receivedValue: any): never {
    this.throwError("TypeError", expectedType.toString(), receivedValue);
  }

  /**
   * Throws a RangeError with a dynamic message.
   *
   * @param {string} expectedRange - The expected value range or condition.
   * @param {any} receivedValue - The actual value that caused the error.
   */
  public throwRangeError(expectedRange: string, receivedValue: any): never {
    this.throwError("RangeError", expectedRange, receivedValue);
  }

  /**
   * Throws a ReferenceError with a dynamic message.
   *
   * @param {string} expectedReference - The expected reference or condition.
   * @param {any} receivedValue - The actual value that caused the error.
   */
  public throwReferenceError(
    expectedReference: string,
    receivedValue: any
  ): never {
    this.throwError("ReferenceError", expectedReference, receivedValue);
  }
}

export default ErrorHandler;
