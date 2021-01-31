import React from "react";

export default function MyNameHooks() {
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
