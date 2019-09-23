import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Popup from "reactjs-popup";
import { getCards, toggleModal, setModalData } from "@actions";
import Card from "./Card";
import Modal from "./Modal";
import "./style.scss";

const url = "https://notificationx.com/wp-json/wp/v2/docs";
const link = "https://www.google.com";

function showCards(cards) {
	return cards.map(card => <Card key={card.id} {...card} />);
}

function showModal(cards, modalData, displayModal, dispatch) {
	return (
		<Fragment>
			{cards.map(card => {
				return (
					<div
						key={card.id}
						className="rcw-card-link"
						onClick={() => {
							dispatch(toggleModal(true));
							dispatch(setModalData(card.content.rendered));
						}}
					>
						<div className="rcw-card-title-wrapper">
							<h3
								className="rcw-card-title"
								dangerouslySetInnerHTML={{
									__html: card.title.rendered
								}}
							></h3>
						</div>
						<div className="rcw-card-body-wrapper">
							<span className="rcw-card-body"></span>
							<div
								dangerouslySetInnerHTML={{
									__html: card.excerpt.rendered
								}}
							></div>
						</div>
					</div>
				);
			})}

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
					<div dangerouslySetInnerHTML={{ __html: modalData }}></div>
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
	const { cards, modalData, displayModal, dispatch } = props;

	return (
		<Fragment>{showModal(cards, modalData, displayModal, dispatch)}</Fragment>
	);
};

function mapStateToProps(state) {
	return {
		cards: state.card.get("cards"),
		displayModal: state.card.get("showModal"),
		modalData: state.card.get("modalData")
	};
}

export default connect(mapStateToProps)(Cards);
