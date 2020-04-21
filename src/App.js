import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import Hello from "./Hello";
import useForm from "./hooks/useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <div>{!data ? "loading ..." : data}</div>
      {/* <div>{loading ? "loading ..." : data}</div> */}
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <div style={{ marginTop: 100 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button onClick={() => inputRef.current.focus()}>클릭 focus</button>
      </div>
      <div style={{ marginTop: 100 }}>
        {showHello && <Hello />}
        <button onClick={() => setShowHello(!showHello)}>show hello</button>
      </div>
    </div>
  );
};

export default App;
