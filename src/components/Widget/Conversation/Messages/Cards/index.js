import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Popup from "reactjs-popup";
import { getCards, toggleModal } from "@actions";
import Card from "./Card";
import Modal from "./Modal";
import "./style.scss";

const url = "https://jsonplaceholder.typicode.com/posts";
const link = "https://www.google.com";

function showCards(cards) {
	return cards.map(card => <Card key={card.id} {...card} />);
}

function showModal(cards, displayModal, dispatch) {
	return (
		<Fragment>
			{cards.map(card => (
				<div
					key={card.id}
					className="rcw-card-link"
					onClick={() => dispatch(toggleModal(true))}
				>
					<div className="rcw-card-title-wrapper">
						<span className="rcw-card-title">{card.title}</span>
					</div>
					<div className="rcw-card-body-wrapper">
						<span className="rcw-card-body">{card.body}</span>
					</div>
				</div>
			))}

			<Popup
				modal
				open={displayModal}
				onClose={() => dispatch(toggleModal(false))}
			>
				<Modal>
					<button
						className="rcw-close-btn"
						onClick={() => dispatch(toggleModal(false))}
					>
						x
					</button>
					<h1>INSIDE MODAL</h1>
					<div>INSIDE MODAL</div>
				</Modal>
			</Popup>
		</Fragment>
	);
}

const Cards = props => {
	useEffect(() => {
		axios.get(url).then(res => props.dispatch(getCards(res.data)));
	}, []);

	let isClicked = true;
	const { cards, displayModal, dispatch } = props;

	return <Fragment>{showModal(cards, displayModal, dispatch)}</Fragment>;
};

function mapStateToProps(state) {
	return {
		cards: state.card.get("cards"),
		displayModal: state.card.get("showModal")
	};
}

export default connect(mapStateToProps)(Cards);
