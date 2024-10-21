export function camelCase(str: string): string {
    const trimmed = str.trim();
    if (trimmed.length === 0) return '';
    const words = trimmed.split(/\s+/); 
    if (words.length === 0) return '';
    const firstWord = words[0].toLowerCase();
    const capitalizedWords = words.slice(1).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return firstWord + capitalizedWords.join('');
}
console.log(camelCase('React Utils Library'));
console.log(camelCase('hello world'));          
