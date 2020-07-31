import React, { useState, useRef } from "react";

const Count = React.memo(
  ({ onOdd, data }) => {
    const [count, setCount] = useState(0);
    const renders = useRef(0);
    console.log(data);
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
  }
  // (prevProps, nextProps) => {
  //   if (prevProps.data.isEven !== nextProps.data.isEven) {
  //     return false;
  //   }
  //   return true;
  //   // true를 반환하면 랜더링 되지 않는다.
  //   // isEven은 변화를 일으키지 않고 있다.
  // }
);

export default Count;
