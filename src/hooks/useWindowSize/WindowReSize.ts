import React, { useEffect, useState } from 'react';

/**
 * Custom hook to track and return the current window size.
 * 
 * @returns {Object} The current width and height of the window.
 * @property {number} width - The current width of the window in pixels.
 * @property {number} height - The current height of the window in pixels.
 */
export const useWindowReSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleWindowSize = () => {
            try {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            } catch (err) {
                console.error("Error while updating window size: ", err);
            }
        };

        window.addEventListener("resize", handleWindowSize);

        return () => {
            window.removeEventListener("resize", handleWindowSize);
        };
    }, []);

    return windowSize;
};
