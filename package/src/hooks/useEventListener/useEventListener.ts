import { useEffect, useCallback } from "react";

export const useEventListener = (
    eventType: string,
    handler: (event: Event) => void,
    target: EventTarget & (Window | HTMLElement) | null = window
): void => {
    const eventHandler = useCallback((event: Event) => handler(event), [handler]);

    useEffect(() => {
        if (!target || !target.addEventListener) return;

        target.addEventListener(eventType, eventHandler);

        return () => {
            target.removeEventListener(eventType, eventHandler);
        };
    }, [eventType, eventHandler, target]);
};
