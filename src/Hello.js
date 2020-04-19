import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("hi");
    // clean up
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>hello</div>;
};
