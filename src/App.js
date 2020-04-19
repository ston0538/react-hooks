import React, { useState, useEffect } from "react";
import { useForm } from "../src/hooks/useForm";
import "./App.css";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [showHello, setShowHello] = useState(false);
  useEffect(() => {
    console.log("hi");
    // clean up
    return () => {
      console.log("unmount");
    };
  }, [values.email]);
  return (
    <div>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>show hello</button> */}
        {/* {showHello && <Hello />} */}

        <input
          name="email"
          placeholder="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
