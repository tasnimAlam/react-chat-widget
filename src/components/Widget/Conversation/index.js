import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import "./style.scss";

const Conversation = props => (
  <div className="rcw-conversation-container">
    <Header />
    <Messages />
  </div>
);

export default Conversation;
