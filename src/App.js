import React, { useState } from "react";
import { useForm } from "../src/hooks/useForm";
import "./App.css";

const App = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      {/* <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <input
        name="email"
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
    </div>
  );
};

export default App;
