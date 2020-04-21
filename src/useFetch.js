import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    // loading text 보여주지 않기
    setState((state) => ({ data: state.data, loading: true }));
    // loading text 보여주기
    // setState({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);
  return state;
};
