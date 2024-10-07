import { useState } from 'react';

export function useClipboard(text: string) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        setCopied(true);
    };
    return [ copy, copied ] as const;
}