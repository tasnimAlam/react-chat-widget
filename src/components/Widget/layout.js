import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Conversation from "./components/Conversation";
import Launcher from "./components/Launcher";
import "./style.scss";

const WidgetLayout = props => (
  <div
    className={`rcw-widget-container ${
      props.fullScreenMode ? "rcw-full-screen" : ""
    } ${props.showChat ? "rcw-opened" : ""}`}
  >
    {props.showChat && <Conversation />}
    {props.customLauncher
      ? props.customLauncher(props.onToggleConversation)
      : !props.fullScreenMode && (
          <Launcher toggle={props.onToggleConversation} badge={props.badge} />
        )}
  </div>
);

WidgetLayout.propTypes = {
  showChat: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  customLauncher: PropTypes.func
};

export default connect(store => ({
  showChat: store.behavior.get("showChat")
}))(WidgetLayout);
