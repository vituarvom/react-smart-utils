import { useEffect } from "react";

export const useEventListener = (eventType: string, handler: (event: Event) => void, target: EventTarget | null = window): void => {
    useEffect(() => {
        if (!target || !target.addEventListener) return;

        const eventHandler = (event: Event) => handler(event);

        target.addEventListener(eventType, eventHandler);

        return () => {
            target.removeEventListener(eventType, eventHandler);
        };
    }, [eventType, handler, target])

};


