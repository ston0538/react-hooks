import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function Index() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{value}</div>
    </div>
  );
}

export default Index;
