import React, { useContext } from "react";

import { MouseContext } from "../hooks/context/MouseContext";
import useMousePosition from "../hooks/useMousePosition";

export default function Cursor() {
  const { cursorState } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const classNames = `circle ${cursorState.cursorType}`;

  return (
    <>
      <span
        id="circle"
        className={classNames}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></span>
      <span
        className={"circletext"}
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        {cursorState.cursorText}
      </span>
    </>
  );
}
