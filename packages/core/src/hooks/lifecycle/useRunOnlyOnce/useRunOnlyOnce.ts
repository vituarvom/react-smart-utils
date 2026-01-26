import { useEffect, useRef } from "react";

// Runs exactly once, even in React 18 StrictMode.
export function useRunOnlyOnce(fn: () => void) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    fn();
  }, []);
}
