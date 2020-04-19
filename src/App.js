import React, { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

const App = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      {/* <div>{!data ? "loading ..." : data}</div> */}
      {/* <div>{loading ? "loading ..." : data}</div> */}
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <></>
    </div>
  );
};

export default App;
