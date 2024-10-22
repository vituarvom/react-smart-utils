/** 
* Creates an object composed of the picked object properties.
* @param {object} obj - Source object to pick properties from
* @param {string[]} keys - The key to pick from the string
* @returns {object} - Return the new object
*/

export const pick = (obj: { [key: string]: any }, keys: string[]): { [key: string]: any } => {
    const result: { [key: string]: any } = {};

    keys.forEach(key => { 
        const keyParts = key.split('.');  
        let value = obj; 
        let currentValue = result; 
        let keyExists = true; 

        for (let i = 0; i < keyParts.length; i++) { 
            const part = keyParts[i]; 

            if (value && part in value) { 
                value = value[part];

                if (i === keyParts.length - 1 && keyExists) {
                    // Assign value at the deepest level
                    currentValue[part] = value;
                } else {
                    // Ensure intermediate objects are initialized properly
                    currentValue[part] = currentValue[part] || {};
                    currentValue = currentValue[part];
                }
            }else{
                keyExists = false;
                currentValue = {};
                break;
            }
        }
    });

    return result;
};
