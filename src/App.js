import React, { useState, useReducer } from "react";
import { DataContext } from "./context/DataContext";
import { LikesAndComments } from "./components/LikesAndComments";
import { Likes } from "./components/Likes";
const App = () => {
  const [data, setData] = useState({ likes: 0, numComments: 0 });
  return (
    <div>
      <button onClick={() => setData((d) => ({ ...d, likes: d.likes + 1 }))}>
        increment likes
      </button>
      <button
        onClick={() =>
          setData((d) => ({ ...d, numComments: d.numComments + 1 }))
        }
      >
        increment numComments
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <DataContext.Provider value={data}>
        <LikesAndComments />
        <br />
        <Likes />
      </DataContext.Provider>
    </div>
  );
};

export default App;
