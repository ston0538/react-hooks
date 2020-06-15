import { observable, decorate, action } from "mobx";
import { createContext } from "react";
class CounterStore {
  count = 0;

  addCount() {
    this.count++;
  }
}

decorate(CounterStore, {
  count: observable,
  addCount: action,
});
export const CounterStoreContext = createContext(new CounterStore());
