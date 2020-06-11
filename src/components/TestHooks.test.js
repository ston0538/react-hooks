import React from "react";
import { render, cleanup } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
const Counter = ({ children, ...rest }) => children(useCounter(rest));

const setup = (props) => {
  const returnVal = {};

  render(
    <Counter>
      {(val) => {
        Object.assign(returnVal, val);
        return null;
      }}
    </Counter>
  );
  return returnVal;
};

afterEach(cleanup);
describe("useCounter test", () => {
  it("test", () => {
    const counterData = setup();
    counterData.increment();
    expect(counterData.count).toBe(2);
    console.log(
      counterData.count,
      counterData.increment,
      counterData.decrement
    );
  });
});
