/** 
* Creates an object composed of the picked object properties.
* @param {object} obj - Source object to pick properties from
* @param {string[]} keys - The key to pick from the string
* @returns {object} - Return the new object
*/

export const pick = (obj: { [key: string]: any }, keys: string[]): { [key: string]: any } => { 
    const result: {[key: string]: any} = {};

    keys.forEach(key =>{ 
        const keyParts = key.split('.'); 
        let value = obj; 
        let currrentValue = result; 

        for(let i=0;i<keyParts.length;i++){ 
            const part = keyParts[i]; 

         if(value && part in obj){ 
            value = value[part]; 

            if(i===keyParts.length-1){  
                currrentValue[part] = value;
            }else{
                currrentValue[part]=currrentValue[part] || {}; 
                currrentValue = currrentValue[part]; 
            }
        }else{
            break;
        }
    }
    });
    return result; 
   }