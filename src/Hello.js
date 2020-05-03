import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./hooks/useMeasure";

export const Hello = () => {
  const renders = useRef(0);
  console.log("renders:", renders.current++);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // useEffect(() => {
  //   // clean up
  //   return () => {
  //     console.log("hello unmount");
  //   };
  // }, []);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading ..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      {/* <div>{loading ? "loading ..." : data}</div> */}
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};

export default Hello;
