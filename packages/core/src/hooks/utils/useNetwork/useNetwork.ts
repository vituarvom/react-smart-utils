import { useState, useEffect, useCallback } from 'react';


/**
 * The `useNetwork` custom hook in TypeScript tracks and provides information about the user's network
 * status and connection details.
 * @returns The `useNetwork` custom hook returns an object with the following properties:
 * - `isOnline`: a boolean indicating whether the user is currently online.
 * - `networkName`: a string representing the network type (e.g., "wifi", "cellular", etc.) or "N/A" if
 * not available.
 * - `networkSpeed`: a number representing the network speed in Mbps or null if not
 */
export const useNetwork = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [networkName, setNetworkName] = useState<string | null>(null);
  const [networkSpeed, setNetworkSpeed] = useState<number | null>(null);
  const [connectionType, setConnectionType] = useState<string | null>(null);

  const updateNetworkStatus = useCallback(() => {
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    setIsOnline(navigator.onLine);

    if (connection) {
      setNetworkSpeed(connection.downlink ?? null);
      setConnectionType(connection.effectiveType ?? 'Unknown');
      setNetworkName(connection.type ?? 'N/A');
    } else {
      setNetworkSpeed(null);
      setConnectionType('Unknown');
      setNetworkName('N/A');
    }
  }, []);

  useEffect(() => {
    // Initial check
    updateNetworkStatus();

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    if (connection) {
      connection.addEventListener('change', updateNetworkStatus);
    }

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      if (connection) {
        connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, [updateNetworkStatus]);

  return { isOnline, networkName, networkSpeed, connectionType };
};
