import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "./useFetch";

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
  useEffect(() => {
    // console.log("hi");
    // clean up
    return () => {
      console.log("hello unmount");
    };
  }, []);
  return (
    <div>
      <div>{!data ? "loading ..." : data}</div>
      {/* <div>{loading ? "loading ..." : data}</div> */}
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};

export default Hello;
