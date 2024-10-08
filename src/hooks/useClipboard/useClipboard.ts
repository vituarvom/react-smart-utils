import { useState } from 'react';

export function useClipboard(text: any) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        setCopied(true);
    };
    return [ copy, copied ] as const;
}