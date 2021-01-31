import React from "react";
import ReactDOM from "react-dom";
let value;
function useState(initialState) {
  if (typeof value === "undefined") value = initialState;
  const setState = (nextValue) => {
    value = nextValue;
    ReactDOM.render(<MyNameHooks />, document.getElementById("root"));
  };
  return [value, setState];
}

function MyNameHooks() {
  const [name, setName] = useState("");
  const change = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>My Hook Name is : {name}</h1>
      <input type="text" value={name} onChange={change} />
    </div>
  );
}

export default MyNameHooks;
