import { useState } from 'react';

/**
 * The useClipboard function in TypeScript allows for copying text to the clipboard and provides
 * feedback on whether the operation was successful.
 * @param [initialText] - The `initialText` parameter in the `useClipboard` function is a string that
 * represents the initial text that will be copied to the clipboard when the `copy` function is called.
 * If no text is provided, an empty string will be used as the default initial text.
 * @returns The `useClipboard` function returns an object with three properties: `isCopied`, `copy`,
 * and `copiedText`. These properties are returned as a constant object using TypeScript's `as const`
 * syntax to ensure immutability.
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
