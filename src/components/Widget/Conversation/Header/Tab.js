import React from "react";
import { connect } from "react-redux";
import { onTabSelect } from "@actions";

const Tab = props => (
	<div className="rcw-tab-wrapper">
		<span
			className={`rcw-tab ${
				props.selectedTab === props.value ? "is-active" : ""
			}`}
			onClick={() => props.dispatch(onTabSelect(props.value))}
		>
			{props.label}
		</span>
	</div>
);

function mapStateToProps(state) {
	return {
		selectedTab: state.behavior.get("selectedTab")
	};
}

export default connect(mapStateToProps)(Tab);
