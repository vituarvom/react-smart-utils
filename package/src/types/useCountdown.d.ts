// types/usePrevious.d.ts

declare module "hooks" {
  // useCountdown.d.ts

  /* The `UseCountdownOptions` interface is defining the options that can be passed to the `useCountdown`
custom hook. It includes the following properties: */
  export interface UseCountdownOptions {
    interval?: number;
    onTick?: () => void;
    onComplete?: () => void;
  }

  /**
   * The `useCountdown` function in TypeScript is a custom hook that handles countdown functionality
   * based on a specified end time with optional callbacks for tick updates and completion.
   * @param {number | null} endTime - The `endTime` parameter represents the timestamp in milliseconds
   * when the countdown should end. If `endTime` is `null`, the countdown will not be active.
   * @param {UseCountdownOptions}  - The `useCountdown` function is a custom React hook that takes in the
   * following parameters:
   * @returns The `useCountdown` custom hook returns the current countdown value as a number or `null`.
   */

  export declare const useCountdown: (
    endTime: number | null,
    options?: UseCountdownOptions
  ) => number | null;
}
