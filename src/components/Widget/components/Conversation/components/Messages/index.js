import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import Cards from "./components/Cards";
import Chat from "./components/Chat";

const Messages = props => {
  console.log(props);
  return (
    <div id="messages" className="rcw-messages-container">
      {props.selectedTab === "ans" ? <Cards /> : <Chat />}
    </div>
  );
};

export default connect(store => ({
  selectedTab: store.behavior.get("selectedTab")
}))(Messages);
