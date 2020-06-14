import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const LikesAndComments = () => {
  const { likes, numComments } = useContext(DataContext);

  return <div>number of likes and comments: {likes + numComments}</div>;
};
