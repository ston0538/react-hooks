import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useObserver } from "mobx-react";
import { CounterStoreContext } from "../store/CountStore";

export const LikesAndComments = () => {
  const store = useContext(DataContext);

  const countStore = useContext(CounterStoreContext);
  return useObserver(() => (
    <div>
      <button onClick={() => countStore.count++}>++</button>
      {countStore.count}
      <div>
        number of likes and comments: {store.data.like + store.data.comment}
      </div>
    </div>
  ));
};
