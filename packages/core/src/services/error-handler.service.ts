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
  private readonly functionName: string;

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

    const errorClasses: { [key in ErrorType]: new (message: string) => Error } =
      {
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
  public throwTypeError(
    expectedType: Type | Type[],
    receivedValue: any
  ): never {
    this.throwError(
      "TypeError",
      Array.isArray(expectedType)
        ? expectedType.join(" or ").toString()
        : expectedType.toString(),
      receivedValue
    );
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

  /**
   * Throws a custom error message for hooks.
   * @param {string} hookName - The name of the hook.
   * @param {string} expectedType - The expected data type or condition.
   * @param {any} receivedValue - The actual value that caused the error.
   */
  public throwHookError(
    hookName: string,
    expectedType: string,
    receivedValue?: any,
    options?: ErrorOptions
  ): never {
    const errorMessage = `rsc: error in hook "${hookName}": Expected type ${expectedType}, but received ${typeof receivedValue}.`;
    throw new Error(errorMessage, options);
  }

  /**
   * The function `throwInvalidHookUsage` throws an error message indicating that a hook must be called
   * within a function component or another hook.
   * @param {string} hookName - The `hookName` parameter in the `throwInvalidHookUsage` function
   * represents the name of the hook that was called incorrectly.
   */
  public throwInvalidHookUsage(hookName: string): never {
    throw new Error(
      `Invalid hook call: ${hookName} must be called within a function component or another hook.`
    );
  }
}

export default ErrorHandler;
