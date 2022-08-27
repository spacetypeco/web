import { useEffect, useState } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    
    useEffect(() => {
      const mouseMoveHandler = (event) => {
        const { pageX, pageY } = event;
        setMousePosition({ x: pageX, y: pageY });
      };
      
      document.addEventListener("mousemove", mouseMoveHandler);
      
      return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, []);

    return mousePosition;
}