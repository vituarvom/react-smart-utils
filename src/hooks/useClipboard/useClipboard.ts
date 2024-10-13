import { useState } from 'react';

export function useClipboard(text: string) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
      setCopied(false);
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
        } catch (err) {
          console.error(`Failed to copy text "${text.substring(0, 20)}...": `, err);
        }
      };
    return [ copy, copied ] as const;
}