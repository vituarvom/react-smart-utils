import { useEffect, useState, useCallback } from "react";
import { throttle } from "../../utils";

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const handleWindowSize = useCallback(() => {
    if (typeof window !== "undefined") {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      if (Number.isFinite(newWidth) && Number.isFinite(newHeight)) {
        setWindowSize({
          width: newWidth,
          height: newHeight,
        });
      } else {
        console.warn("Received non-finite dimensions for window size:", {
          newWidth,
          newHeight,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      console.warn(
        "Window object is not defined. This may be running on the server side."
      );
      return;
    }

    const throttledHandleWindowSize = throttle(handleWindowSize, 100);

    window.addEventListener("resize", throttledHandleWindowSize);

    handleWindowSize();

    return () => {
      window.removeEventListener("resize", throttledHandleWindowSize);
    };
  }, [handleWindowSize]);

  return windowSize;
};
