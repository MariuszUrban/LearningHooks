import React, { Component } from "react";

export default class MyName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
      this.setState({name: e.target.value})
  }

  render() {
      const {name} = this.state; 
    return <div><h1>My Name is: {name}</h1><input type="text" value={name} onChange={this.handleChange}></input></div>;
  }
}
