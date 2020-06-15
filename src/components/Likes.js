import React, { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { useObserver, useLocalStore } from "mobx-react";
import { CounterStoreContext } from "../store/CountStore";

export const Likes = React.memo(() => {
  const store = useContext(DataContext);
  const renders = useRef(0);
  const countStore = useContext(CounterStoreContext);
  // console.log(store);
  return useObserver(() => (
    <div>
      <button onClick={() => countStore.count++}>++</button>
      {countStore.count}
      <div>number of likes: {store.data.like}</div>
      <div>Likes component renders : {renders.current++}</div>
      {/* {store.bugs.map((bug) => (
        <div>{bug}</div>
      ))}
      {store.like} */}
    </div>
  ));
});
