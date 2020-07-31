import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import Count from "./components/Count";

const App = () => {
  const [text, setText] = useState("");
  const test = 1;
  const renders = useRef(0);
  // console.log(renders.current);
  const onOdd = useCallback(() => setText(""), [setText]);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>App component renders: {renders.current++}</div>
      <Count onOdd={onOdd} />
    </div>
  );
};

export default App;
