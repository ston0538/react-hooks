import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useObserver } from "mobx-react";

export const LikesAndComments = () => {
  const store = useContext(DataContext);

  return useObserver(() => (
    <div>
      number of likes and comments: {store.data.like + store.data.comment}
    </div>
  ));
};
