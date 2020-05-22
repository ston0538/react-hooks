import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  );
}

export default About;
