import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Popup from "reactjs-popup";
import SearchBar from "material-ui-search-bar";

import { getCards, toggleModal, setModalData, setSearchText } from "@actions";
import Card from "./Card";
import Modal from "./Modal";
import { URL } from "../../../../../utils/constants";
import "./style.scss";

function filterCards(cards, searchText) {
	return cards.filter(
		card =>
			card.title.rendered.toLowerCase().includes(searchText.toLowerCase()) ||
			card.content.rendered.toLowerCase().includes(searchText.toLowerCase())
	);
}

function ShowModal({
	allCards,
	searchText,
	modalData,
	displayModal,
	dispatch
}) {
	let cards = [...allCards];

	// Filter cards on search
	if (searchText) {
		cards = filterCards(cards, searchText);
	}
	console.log(cards);

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
							<div
								className="rcw-card-body"
								dangerouslySetInnerHTML={{
									__html: card.excerpt.rendered
								}}
							></div>
						</div>
					</div>
				);
			})}

			<div className="rcw-modal-wrapper">
				<Popup
					modal
					open={displayModal}
					onClose={() => dispatch(toggleModal(false))}
				>
					<Modal>
						<button
							className="rcw-close-btn"
							onClick={() => dispatch(toggleModal(false))}
						></button>
						<div dangerouslySetInnerHTML={{ __html: modalData }}></div>
					</Modal>
				</Popup>
			</div>

			<div className="rcw-search-bar">
				<SearchBar
					value={searchText}
					onRequestSearch={value => {
						dispatch(setSearchText(value));
					}}
				/>
			</div>
		</Fragment>
	);
}

const Cards = props => {
	useEffect(() => {
		axios.get(URL).then(res => props.dispatch(getCards(res.data)));
	}, [props.searchText]);

	return <ShowModal {...props} />;
};

function mapStateToProps(state) {
	return {
		allCards: state.card.get("cards"),
		displayModal: state.card.get("showModal"),
		modalData: state.card.get("modalData"),
		searchText: state.card.get("searchText")
	};
}

export default connect(mapStateToProps)(Cards);
