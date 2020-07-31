import React, { useState, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Count from "./components/Count";

const data = { isEven: false };
const App = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const test = 1;
  const renders = useRef(0);
  // console.log(renders.current);
  const onOdd = useCallback(() => setText(""), [setText]);
  const data = useMemo(
    () => ({
      text2,
      isEven: text2.length % 2 === 0,
    }),
    [text2]
  );
  // docs 처럼 함수에 a,b인자가 사용되지 않았으니 종속성도 필요 없다.

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input
        value={text2}
        placeholder="text2"
        onChange={(e) => setText2(e.target.value)}
      />
      <div>App component renders: {renders.current++}</div>
      <Count onOdd={onOdd} data={data} />
    </div>
  );
};

export default App;
