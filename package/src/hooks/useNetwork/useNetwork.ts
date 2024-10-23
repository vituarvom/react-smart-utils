import { useState, useEffect } from 'react';

/**
 * Custom hook to track and return the current network status.
 * 
 * @returns {{ 
 *   isOnline: boolean; 
 *   networkName: string | null; 
 *   networkSpeed: number | null; 
 *   connectionType: string | null; 
 * }} The current network status including online status, network name, speed, and connection type.
 */
export const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [networkName, setNetworkName] = useState<string | null>(null);
  const [networkSpeed, setNetworkSpeed] = useState<number | null>(null);
  const [connectionType, setConnectionType] = useState<string | null>(null);

  useEffect(() => {
    const updateNetworkStatus = () => {
      try {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const setOfConnection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

        setIsOnline(navigator.onLine);

        if (setOfConnection) {
          setNetworkSpeed(setOfConnection.downlink || null);
          setConnectionType(setOfConnection.effectiveType || 'Unknown');
          setNetworkName(setOfConnection.type || 'N/A'); 
        }
      } catch (err) {
        console.error('Error retrieving network information:', err);
        setNetworkName('N/A');
        setNetworkSpeed(null);
        setConnectionType('Unknown');
      }
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', updateNetworkStatus);
    }

    updateNetworkStatus();

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);

      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  return { isOnline, networkName, networkSpeed, connectionType };
};