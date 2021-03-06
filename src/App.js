import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Hello from "./Hello";
import useForm from "./hooks/useForm";
import { useMeasure } from "./hooks/useMeasure";
import { TestHooks } from "./components/TestHooks";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const helloRef = useRef(() => {});

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);
  useEffect(() => {
    console.log("inputRef", inputRef);
    console.log("helloref", helloRef);
  }, []);
  console.log(inputRef.current);
  return (
    <div>
      <div style={{ background: "blue" }}>
        <h1>Input Ref</h1>
        <div style={{ marginTop: 100 }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <pre>{JSON.stringify(rect, null, 2)}</pre>
          <input
            ref={inputRef2}
            type="text"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              // inputRef.current.focus();
              helloRef.current();
            }}
          >
            클릭 focus
          </button>
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        {showHello && <Hello />}
        <button onClick={() => setShowHello(!showHello)}>show hello</button>
      </div>
      <div style={{ marginTop: 500 }}>
        <h2>React hooks test</h2>
        <TestHooks />
      </div>
    </div>
  );
};

export default App;
