import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  // const [isCurrent, isSetCurrent] = useState(true);
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      console.log("useFetch unmount");
      isCurrent.current = false;
      // isSetCurrent(false);
    };
  }, []);
  useEffect(() => {
    // loading text 보여주지 않기
    setState((state) => ({ data: state.data, loading: true }));
    // loading text 보여주기
    // setState({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        if (isCurrent.current) {
          setTimeout(() => {
            setState({ data: y, loading: false });
          }, 2000);
        }
      });
  }, [url, setState]);
  return state;
};
