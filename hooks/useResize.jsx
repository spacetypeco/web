import { useEffect } from "react";

export default function useResize(delay, callbackFn, onlyLarger=true, callOnStart=true) {
  useEffect(() => {
    const currentWidth = 0;
    const handler = null;

    const scheduleUpdate = () => {
      if (handler) {
        clearTimeout(handler);
      }

      handler = setTimeout(() => {
        handler = null;
        const newWidth = window.innerWidth;
        console.log({currentWidth, newWidth});

        if (!onlyLarger || newWidth > currentWidth) {
          callbackFn();
        }

        currentWidth = newWidth;
      }, delay);
    };

    if (callOnStart) {
        callbackFn();
    }
    
    window.addEventListener("resize", scheduleUpdate);
    return () => {
        window.removeEventListener("resize", scheduleUpdate);
        if (handler) {
            clearTimeout(handler);
        }
    }
  }, []);
}
