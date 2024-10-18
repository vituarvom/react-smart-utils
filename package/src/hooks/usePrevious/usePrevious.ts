import { useEffect, useRef } from "react";
import ErrorHandler from "../../services/error-handler.service";

/**
 * The `usePrevious` function in TypeScript allows you to store and retrieve the previous value of a
 * variable in a React functional component.
 * @param {T} value - The `value` parameter in the `usePrevious` function is the value for which you
 * want to keep track of the previous value. This function is designed to be used in React functional
 * components to store and retrieve the previous value of a given input value.
 * @returns The `usePrevious` function returns the previous value of the input value passed to it.
 */

export function usePrevious<T>(value: T): T | null {
  const errorHandler = new ErrorHandler("usePrevious");

  if (value === undefined) {
    errorHandler.throwHookError("usePrevious", "defined value", value);
  }

  if (typeof value === "function") {
    errorHandler.throwHookError(
      "usePrevious",
      "non-function value (avoid passing functions directly to usePrevious)",
      value
    );
  }

  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
