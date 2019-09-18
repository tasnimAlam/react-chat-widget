import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCards } from "@actions";

const Cards = props => {
	useEffect(() => {
		props.dispatch(getCards());
	}, []);
	return <div>Cards here</div>;
};

function mapStateToProps(state) {
	return {
		card: state.card.cards
	};
}

export default connect(mapStateToProps)(Cards);
