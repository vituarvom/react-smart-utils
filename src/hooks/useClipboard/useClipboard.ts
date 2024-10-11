import { useState } from 'react';

export function useClipboard(text: any) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };
    return [ copy, copied ] as const;
}