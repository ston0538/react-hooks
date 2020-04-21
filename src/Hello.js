import React, { useEffect, useRef } from "react";

export const Hello = () => {
  const renders = useRef(0);
  console.log("renders:", renders.current++);
  // useEffect(() => {
  //   console.log("hi");
  //   // clean up
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  return <div>hello</div>;
};

export default Hello;
