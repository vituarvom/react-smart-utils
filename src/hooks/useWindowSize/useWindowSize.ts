import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Custom hook to track and return the current window size.
 * 
 * @returns {WindowSize} The current width and height of the window.
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleWindowSize = () => {
      try {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      } catch (err) {
        console.error('Error while updating window size:', err);
      }
    };

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;