import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorState: { cursorType: "", cursorText: "" },
  cursorChangeHandler: (_cursorType, _cursorText) => {},
});

const MouseContextProvider = (props) => {
  const [cursorState, setCursorState] = useState({
    cursorType: "",
    cursorText: "",
  });

  const cursorChangeHandler = (cursorType, cursorText) => {
    setCursorState({ cursorType, cursorText });
  };

  return (
    <MouseContext.Provider
      value={{
        cursorState,
        cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};
export default MouseContextProvider;
