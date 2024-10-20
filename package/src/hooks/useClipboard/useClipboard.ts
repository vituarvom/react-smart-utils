import { useState } from 'react';

/**
 * The useClipboard function in TypeScript allows for copying text to the clipboard and provides
 * feedback on whether the copy was successful.
 * @param [initialText] - The `initialText` parameter is a default text that will be copied to
 * the clipboard if no text is provided when calling the `copy` function.
 * @returns An object with `copy` function, `isCopied` boolean, and `copiedText`.
 */
export function useClipboard(initialText = '') {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState(initialText);

  if (typeof initialText !== 'string') {
    throw new Error('useClipboard only accepts strings');
  }

  const copy = async (text: string) => {
    if (typeof text !== 'string') {
      throw new Error('copy function only accepts strings');
    }
  
    try {
      const textToCopy = text || initialText;
      await navigator.clipboard.writeText(textToCopy);
      setCopiedText(textToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setIsCopied(false);
    }
  };

  return { isCopied, copy, copiedText } as const;
}
