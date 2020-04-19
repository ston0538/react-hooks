import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  //   console.log(initialValue);
  return [
    values,
    (e) => {
      // console.log(e.target);
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
