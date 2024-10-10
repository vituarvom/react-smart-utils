import { useState } from "react";

/**
 * The `useToggle` function in TypeScript returns a boolean state value and a function to toggle that
 * value.
 * @param {boolean} [initialValue=false] - The `initialValue` parameter in the `useToggle` function is
 * a boolean value that determines the initial state of the toggle. If no value is provided when
 * calling the `useToggle` function, the default initial value will be `false`.
 * @returns An array containing the current state value and a function to toggle the state value is
 * being returned.
 */
export const useToggle = (
  initialValue: boolean = false
) => {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(!state);
  return [state, toggle] as const;
};
