// types/useToggle.d.ts

declare module 'hooks' {
    /**
     * The `useToggle` hook returns a boolean state value and a function to toggle that value.
     *
     * @param {boolean} [initialValue=false] - The initial state of the toggle. If no value is provided,
     * the default initial value will be `false`.
     *
     * @returns {[boolean, () => void]} - An array containing the current state value and a function to toggle
     * the state value.
     */
    export function useToggle(initialValue?: boolean): [boolean, () => void];
  }
  