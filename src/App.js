import React from "react";
import ReactDOM from "react-dom";
let values = [];
let currentHook = 0;

function useState(initialState) {
  if (typeof values === "undefined") values[currentHook] = initialState;
  let hookIndex = currentHook;
  const setState = (nextValue) => {
    values[hookIndex] = nextValue;
    console.log("🚀 ~ setState ~ values", values);
    ReactDOM.render(<MyNameHooks />, document.getElementById("root"));
  };
  return [values[currentHook++], setState];
}

function MyNameHooks() {
  currentHook = 0;
  const [enableFirstName, setEnableFirstName] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEnableChange = (e) => {
    setEnableFirstName(!enableFirstName);
  };

  return (
    <div>
      <h1>
        My Hook Name is : {enableFirstName ? name : ""} and my last name is:{" "}
        {lastName}
      </h1>
      <input
        type="checkbox"
        value={enableFirstName}
        onChange={handleEnableChange}
      />
      <input id="name" type="text" value={name} onChange={handleChangeName} />
      <input type="text" value={lastName} onChange={handleChangeLastName} />
    </div>
  );
}

export default MyNameHooks;
