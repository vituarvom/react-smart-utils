import { useState, useEffect } from "react";

const sample = (arr: any[]) => {
    const [randomElement, setRandomElement] = useState<any>(null);

    useEffect(() => {
        if (!Array.isArray(arr)) {
            console.error("TypeError: Expected an array as input");
            return;
        }

        if (arr.length > 0) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            setRandomElement(arr[randomIndex]);
        } else {
            console.log("The array is empty.");
        }
    }, [arr]);

    return randomElement;
}

export default sample;
