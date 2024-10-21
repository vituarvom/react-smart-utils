declare module "hooks" {
  type FormatOptions =
    | "hh:mm"
    | "hh:mm:ss"
    | "mm:ss"
    | "ss"
    | ((timeInSeconds: number) => string);

  interface UseCountdownOptions {
    interval?: number; // Interval in milliseconds for countdown updates (default 1000ms)
    onTick?: () => void; // Callback invoked on each tick
    onComplete?: () => void; // Callback invoked when countdown reaches zero
    format?: FormatOptions; // Format string or function for formatting countdown time
  }

  interface CountdownControls {
    start: () => void; // Start the countdown
    pause: () => void; // Pause the countdown
    resume: () => void; // Resume the countdown
    reset: () => void; // Reset the countdown to the initial state
    increaseTime: (seconds: number) => void; // Increase the countdown by x seconds
    decreaseTime: (seconds: number) => void; // Decrease the countdown by x seconds
  }

  /**
   * useCountdown hook to create a countdown timer with extra functionalities like pause, reset, and more.
   *
   * @param {number} initialTimeInSeconds - The initial countdown time in seconds.
   * @param {UseCountdownOptions} options - Optional settings like interval, onTick, onComplete, and format.
   *   - `interval` (number): The interval in milliseconds for countdown updates (default is 1000ms).
   *   - `onTick` (function): A callback function invoked on each tick.
   *   - `onComplete` (function): A callback function invoked when the countdown reaches zero.
   *   - `format` (string or function):  Predefined format options ('hh:mm', 'hh:mm:ss', 'mm:ss', 'ss') or a custom formatting function.
   *
   *
   *  @param {CountdownControls} countdownControls - Optional settings like interval, onTick, onComplete, and format.
   *   - `start` (function): To start the timer
   *   - `pause` (function): To pause the timer
   *   - `resume` (function): To resume the timer
   *   - `reset` (function):   To reset the timer
   *   - `increaseTime` ((x: number) => {}):   To increase the timer by x seconds
   *   - `decreaseTime` ((x: number) => {}):   To decrease the timer by x seconds
   *
   *
   * @returns [formattedTime, countdownControls] - Countdown time and control functions.
   */
  declare function useCountdown(
    initialTimeInSeconds: number, // Initial countdown time in seconds
    options?: UseCountdownOptions // Optional countdown settings
  ): [string | number | null, CountdownControls];
}