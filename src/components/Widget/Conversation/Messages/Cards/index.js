import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Popup from "reactjs-popup";
import SearchBar from "material-ui-search-bar";
import Search from "./Search";
import CardLoader from "./CardLoader";

import {
	getCards,
	toggleModal,
	setModalData,
	setSearchText,
	toggleLoading
} from "@actions";
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

function showPlaceholder() {
	return Array.from([1, 2, 3]).map((item, index) => <CardLoader key={index} />);
}

function ShowModal({
	allCards,
	searchText,
	loading,
	modalData,
	displayModal,
	dispatch
}) {
	let cards = [...allCards];

	// Filter cards on search
	if (searchText) {
		cards = filterCards(cards, searchText);
	}

	if (loading) {
		return showPlaceholder();
	}

	return (
		<Fragment>
			{cards.map(card => (
				<Card key={card.id} {...card} />
			))}

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

			<Search />
		</Fragment>
	);
}

const Cards = props => {
	useEffect(() => {
		// Get cards from server
		let url = `${URL}&search=${props.searchText}`;
		axios.get(url).then(res => props.dispatch(getCards(res.data)));
	}, [props.searchText]);

	useEffect(() => {
		const timer = setTimeout(() => {
			props.dispatch(toggleLoading(false));
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	return <ShowModal {...props} />;
};

function mapStateToProps(state) {
	return {
		allCards: state.card.get("cards"),
		displayModal: state.card.get("showModal"),
		modalData: state.card.get("modalData"),
		searchText: state.card.get("searchText"),
		loading: state.card.get("loading")
	};
}

export default connect(mapStateToProps)(Cards);
