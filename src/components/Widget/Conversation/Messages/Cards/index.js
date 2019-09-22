import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Popup from "reactjs-popup";
import { getCards } from "@actions";
import Card from "./Card";
import Modal from "./Modal";
import "./style.scss";

const url = "https://jsonplaceholder.typicode.com/posts";
const link = "https://www.google.com";

function showCards(cards) {
	return cards.map(card => <Card key={card.id} {...card} />);
}

function showModal(cards) {
	return cards.map(card => (
		<Popup
			key={card.id}
			modal
			trigger={open => (
				<div className="rcw-card-link" onClick={open}>
					<div className="rcw-card-title-wrapper">
						<span className="rcw-card-title">{card.title}</span>
					</div>
					<div className="rcw-card-body-wrapper">
						<span className="rcw-card-body">{card.body}</span>
					</div>
				</div>
			)}
		>
			<Modal>
				<h1>{card.title}</h1>
				<div>{card.body}</div>
				<div>{card.body}</div>
				<div>{card.body}</div>
				<div>{card.body}</div>
				<div>{card.body}</div>
			</Modal>
		</Popup>
	));
}
const Cards = props => {
	useEffect(() => {
		axios.get(url).then(res => props.dispatch(getCards(res.data)));
	}, []);

	let isClicked = true;

	return (
		<Fragment>
			{isClicked ? showModal(props.cards) : showCards(props.cards)}
		</Fragment>
	);
};

function mapStateToProps(state) {
	return {
		cards: state.card.get("cards")
	};
}

export default connect(mapStateToProps)(Cards);
