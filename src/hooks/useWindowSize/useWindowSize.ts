import { useState, useEffect } from 'react';

/**
 * Custom hook to track and return the current window size.
 * 
 * @returns {WindowSize} The current width and height of the window.
 */

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
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