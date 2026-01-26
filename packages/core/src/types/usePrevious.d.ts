// types/usePrevious.d.ts

declare module 'hooks' {
    /**
     * The `usePrevious` hook allows you to store and retrieve the previous value of a variable
     * in a React functional component.
     *
     * @param {T} value - The value for which you want to keep track of the previous value.
     * This function is designed to be used in React functional components to store and retrieve
     * the previous value of a given input value.
     * 
     * @returns {T | null} - The previous value of the input value passed to it.
     * If no previous value exists (i.e., the hook is used for the first time), it returns null.
     * 
     * @template T - The type of the value being tracked.
     */
    export function usePrevious<T>(value: T): T | null;
  }
  