import React, { useState } from "react";

export default function Login({ dispatch }) {
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN", userName });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        value={userName}
        onChange={handleUserName}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" />
    </form>
  );
}
