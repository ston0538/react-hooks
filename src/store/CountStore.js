import { observable, decorate } from "mobx";
import { createContext } from "react";
class CounterStore {
  count = 0;
}

decorate(CounterStore, {
  count: observable,
});
export const CounterStoreContext = createContext(new CounterStore());
