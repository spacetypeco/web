import { useEffect } from "react";

const BREAKPOINTS = [500, 1000, 1500];

const crossedBreakpoint = (oldWidth, newWidth) => {
    if (newWidth >= currentWidth) {
        return false;
    }

    for (const pt of BREAKPOINTS) {
        if (oldWidth < pt && newWidth >= pt) {
          return true;
        }
      }
  
      return false;
}

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
        
        if (!onlyLarger || crossedBreakpoint(currentWidth, newWidth)) {
          callbackFn(currentWidth, newWidth);
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
