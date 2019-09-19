import React from "react";
import { connect } from "react-redux";
import { onTabSelect } from "@actions";

const Tab = props => (
  <span
    className="rcw-tab"
    onClick={() => props.dispatch(onTabSelect(props.value))}
  >
    {props.label}
  </span>
);

export default connect()(Tab);
