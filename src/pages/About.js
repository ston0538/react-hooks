import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function About() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{value}</div>
      <button onClick={() => setValue("Bye")}>chage value</button>
    </div>
  );
}

export default About;
