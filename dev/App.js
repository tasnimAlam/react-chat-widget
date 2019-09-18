import React, { Component } from "react";
import { Widget } from "../index";

export default class App extends Component {
  handleNewUserMessage = newMessage => {
    console.log("new messages");
  };

  render() {
    return (
      <Widget handleNewUserMessage={this.handleNewUserMessage} badge={0} />
    );
  }
}
