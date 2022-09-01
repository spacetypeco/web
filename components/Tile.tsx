import { MouseContext } from "../hooks/context/MouseContext";
import React from "react";
import { useContext } from "react";

export default function Tile({ w, h, title, style, ...props }) {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div
      className={`tile rounded wipe-down`}
      onMouseEnter={() => cursorChangeHandler("hovered", title)}
      onMouseLeave={() => cursorChangeHandler("", "")}
      style={{
        gridRowEnd: `span ${h}`,
        gridColumnEnd: `span ${w}`,
        ...style,
      }}
    >
      {props.children}
    </div>
  );
}
