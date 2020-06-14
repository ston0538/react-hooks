import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";

export const Form = () => {
  const store = useContext(DataContext);
  const [bug, setBug] = useState("");
  const [like, setLike] = useState();
  return (
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     store.addBug(bug);
    //     setBug("");
    //   }}
    // >
    //   <input value={bug} onChange={(e) => setBug(e.target.value)}></input>
    // </form>
    <>
      <button onClick={() => store.addLike()}>Like increment</button>
      <button onClick={() => store.addComment()}>Comment increment</button>
    </>
  );
};
