export function camelCase(str: string): string {
    let words = str.split(' ');
    let  camelCaseStr = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
         const word = words[i];
        camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return camelCaseStr;
}

camelCase('React Utils Library');  
camelCase('hello world');          
