import React, { useState, useRef } from "react";
import "./App.css";
import Hello from "./Hello";
import useForm from "./hooks/useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const helloRef = useRef(() => console.log("helloRef"));
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
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
        <button
          onClick={() => {
            inputRef.current.focus();
            helloRef.current();
          }}
        >
          클릭 focus
        </button>
      </div>
      <div style={{ marginTop: 100 }}>
        {showHello && <Hello />}
        <button onClick={() => setShowHello(!showHello)}>show hello</button>
      </div>
    </div>
  );
};

export default App;
