import React, { useState } from "react";
import "./App.css";

const App = () => {
  // object로 한번에 2개의 값 변화 or 한개의 값 변화
  // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  // 그냥 보통 2개로 나누어서 해도됨
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div>
      {/* object 한개의 값만 업데이트 */}
      {/* <button
        onClick={() =>
          setCount(c => ({
            ...c,
            count1: c.count1 + 1
          }))
        }
      > */}
      {/* object 두개의 값 업데이트 */}
      {/* <button
        onClick={() =>
          setCount(c => ({
            count1: c.count1 + 1,
            count2: c.count2 + 1
          }))
        }
      > */}
      <button
        onClick={() => {
          setCount1((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};

export default App;
