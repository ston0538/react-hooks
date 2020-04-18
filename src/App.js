import React, { useState } from "react";
import "./App.css";

const App = () => {
  // prac 1
  // const [count, setCount] = useState(10);

  // prac 2
  // object로 한번에 2개의 값 변화 or 한개의 값 변화
  // 그냥 보통 2개로 나누어서 해도됨
  // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });

  // prac3
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>prac1 +</button> */}
      {/* <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        prac1 +
      </button> */}

      {/* <button
        onClick={() =>
          setCount((currentState) => ({
            count1: currentState.count1 + 1,
            count2: currentState.count2 + 1,
          }))
        }
      >
        object 내에서 2개의 값 변화
      </button> */}

      {/* <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
            // count2: currentState.count2 + 1,
          }))
        }
      >
        object 내에세 1개의 값만 변화
      </button> */}

      {/* <button
        onClick={() => {
          setCount1((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        각각 변화
      </button> */}

      {/* <div>{count}</div> */}
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};

export default App;
