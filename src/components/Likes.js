import React, { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { useObserver } from "mobx-react";

export const Likes = React.memo(() => {
  const store = useContext(DataContext);
  const renders = useRef(0);
  // console.log(store);
  return useObserver(() => (
    <div>
      <div>number of likes: {store.like}</div>
      <div>Likes component renders : {renders.current++}</div>
      {/* {store.bugs.map((bug) => (
        <div>{bug}</div>
      ))}
      {store.like} */}
    </div>
  ));
});
