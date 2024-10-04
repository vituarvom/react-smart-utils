export function throttle<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let lastCall = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let lastArgs: Parameters<T> | null = null;
  
    function throttled(this: any, ...args: Parameters<T>): void {
      const now = Date.now();
  
      if (now - lastCall < wait) {
        clearTimeout(timeoutId!);
        lastArgs = args;
  
        timeoutId = setTimeout(() => {
          lastCall = now;
          func.apply(this, lastArgs!);
        }, wait - (now - lastCall));
      } else {
        lastCall = now;
        func.apply(this, args);
      }
    }
    return throttled as T;
  }
  