import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import Cards from "./Cards";
import Chat from "./Chat";

const Messages = props => {
  return (
    <div id="messages" className="rcw-messages-container">
      {props.selectedTab === "ans" ? <Cards /> : <Chat />}
    </div>
  );
};

export default connect(store => ({
  selectedTab: store.behavior.get("selectedTab")
}))(Messages);
