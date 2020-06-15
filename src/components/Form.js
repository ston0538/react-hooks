import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useObserver } from "mobx-react";

export const Form = () => {
  const store = useContext(DataContext);
  const [bug, setBug] = useState("");
  const [like, setLike] = useState();
  return useObserver(() => (
    <>
      <button onClick={() => store.addLike()}>Like increment</button>
      <button onClick={() => store.addComment()}>Comment increment</button>
      <pre>{JSON.stringify(store.data, null, 2)}</pre>
    </>
  ));
  // <form
  //   onSubmit={(e) => {
  //     e.preventDefault();
  //     store.addBug(bug);
  //     setBug("");
  //   }}
  // >
  //   <input value={bug} onChange={(e) => setBug(e.target.value)}></input>
  // </form>
};
