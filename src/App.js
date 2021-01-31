import React, { Component } from "react";
import MyName from "./components/MyName";
import MyNameHooks from "./components/MyNameHooks";
export default class App extends Component {
  render() {
    return (
      <>
        <MyName />
        <MyNameHooks />
      </>
    );
  }
}
