import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getCards } from "@actions";
import "./style.scss";

const url = "https://jsonplaceholder.typicode.com/posts";
const link = "https://www.google.com";

const Card = props => {
	return (
		<div className="rcw-card-link">
			<div className="rcw-card-title-wrapper">
				<span className="rcw-card-title">{props.title}</span>
			</div>
			<div className="rcw-card-body-wrapper">
				<span className="rcw-card-body">{props.body}</span>
			</div>
		</div>
	);
};

const Cards = props => {
	useEffect(() => {
		axios.get(url).then(res => props.dispatch(getCards(res.data)));
	}, []);

	return (
		<div>
			{props.cards.map(card => (
				<Card key={card.id} {...card} link={link} />
			))}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		cards: state.card.get("cards")
	};
}

export default connect(mapStateToProps)(Cards);
