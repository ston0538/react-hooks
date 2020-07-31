import React, { useState, useRef } from "react";

const Count = React.memo(({ onOdd }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);
  return (
    <div>
      <h3>Child component</h3>
      <div>count: {count}</div>
      <div>Count component renders: {renders.current++}</div>
      <button
        onClick={() => {
          if (count % 2 === 0) {
            onOdd();
          }
          setCount((c) => c + 1);
        }}
      >
        increment
      </button>
    </div>
  );
});

export default Count;
