import React from "react";
import ReactDOM from "react-dom";

export default function useState(initialState) {
  let value = initialState;
  const setState = (nextValue) => {
    value = nextValue;
    ReactDOM.render(<MyNameHooks />, document.getElementById("root"));
  };
  return [value, setState];
}
