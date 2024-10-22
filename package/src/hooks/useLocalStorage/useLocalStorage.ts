import { useState } from 'react';

/**
 * A custom hook that syncs state with localStorage.
 * 
 * @param key - The key to access in localStorage.
 * @param initialValue - The initial value to set if no value exists in localStorage.
 * @returns [value, setValue] - The current value from localStorage and a function to update it.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get stored value from localStorage or return the initialValue if not present
  const getStoredValue = (): T => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error retrieving localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // Set value in localStorage and update state
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
