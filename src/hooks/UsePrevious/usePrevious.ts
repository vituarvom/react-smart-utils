import { useRef, useEffect, useState } from 'react';

/**
 * Custom hook that tracks the previous value of a variable.
 * @param {number} value - The value to track.
 * @returns {number | undefined} - The previous value, or undefined on the first render.
 * @throws Will throw an error if the value is undefined.
 */
export function usePrevious<T>(value: T): T | undefined {
  // Handle the case where the value is explicitly undefined
  if (value === undefined) {
    throw new Error("usePrevious hook requires a defined value");
  }



  const ref = useRef<T | undefined>(undefined); 

  useEffect(() => {
    ref.current = value; 
  }, [value]);

  return ref.current; 
}


