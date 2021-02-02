import React from "react";
import ReactDOM from "react-dom";
let values = [];
let currentHook = 0;

function useState(initialState) {
  if (typeof values === "undefined") values[currentHook] = initialState;
  let hookIndex = currentHook;
  const setState = (nextValue) => {
    values[hookIndex] = nextValue;
    ReactDOM.render(<MyNameHooks />, document.getElementById("root"));
  };
  return [values[currentHook++], setState];
}

function MyNameHooks() {
  currentHook = 0;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <h1>
        My Hook Name is : {name} and my last name is: {lastName}
      </h1>
      <input id="name" type="text" value={name} onChange={changeName} />
      <input type="text" value={lastName} onChange={changeLastName} />
    </div>
  );
}

export default MyNameHooks;
