import React, { useState, useContext } from "react";
import { useLocalStore, useObserver, observer } from "mobx-react";
import { DataContext } from "./context/DataContext";
import { LikesAndComments } from "./components/LikesAndComments";
import { Likes } from "./components/Likes";
import { Form } from "./components/Form";

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["hk"],
    like: 0,
    comment: 0,
    data: {
      like: 0,
      comment: 0,
    },
    addLike: () => {
      store.data.like++;
    },
    addComment: () => {
      store.data.comment++;
    },
    addBug: (bug) => {
      store.bugs.push(bug);
    },
  }));
  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};
const App = observer(() => {
  return (
    <StoreProvider>
      <Form />
      <LikesAndComments />
      <br />
      <Likes />
    </StoreProvider>
  );
});

export default App;
