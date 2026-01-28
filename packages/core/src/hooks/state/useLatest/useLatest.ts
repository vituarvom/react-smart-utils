import { useRef } from "react";

/**
 * useLatest
 * @description Always get the latest value inside async callbacks
 * note: 
 * Does not trigger re-renders
 * Ref identity is stable
 * Safe replacement for useCallback in many async cases
 * @platform web, native
 */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
