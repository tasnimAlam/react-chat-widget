import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleChat } from "@actions";

import WidgetLayout from "./layout";

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  };

  render() {
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        customLauncher={this.props.customLauncher}
      />
    );
  }
}

Widget.propTypes = {
  handleNewUserMessage: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  customLauncher: PropTypes.func
};

export default connect()(Widget);
