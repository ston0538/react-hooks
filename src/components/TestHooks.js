import React from "react";
import { useCounter } from "../hooks/useCounter";

export const TestHooks = () => {
  const { count, increment, decrement } = useCounter({
    initialCount: 1,
    step: 2,
  });
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
