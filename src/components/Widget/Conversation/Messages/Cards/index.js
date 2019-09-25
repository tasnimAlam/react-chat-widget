import React, { useState, useEffect, Fragment } from "react";
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
	displayModal,
	modalData,
	dispatch
}) {
	let cards = [...allCards];
	let [isOpen, toggleModal] = useState(false);

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
				<Card
					key={card.id}
					{...card}
					toggleModal={toggleModal}
					setModalData={setModalData}
					dispatch={dispatch}
				/>
			))}
			<Modal data={modalData} isOpen={isOpen} toggleModal={toggleModal} />
			<Search searchText={searchText} />
		</Fragment>
	);
}

const Cards = props => {
	const [loading, setLoading] = useState(true);
	const fetchData = url => {
		axios.get(url).then(res => props.dispatch(getCards(res.data)));
	};

	useEffect(() => {
		// Get cards from server
		let url = `${URL}&search=${props.searchText}`;
		fetchData(url);
	}, [props.searchText]);

	useEffect(() => {
		// Set loading effect
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		fetchData(URL);
		props.dispatch(setSearchText(""));
	}, [props.inputText]);

	return <ShowModal {...props} loading={loading} />;
};

function mapStateToProps(state) {
	return {
		allCards: state.card.get("cards"),
		displayModal: state.card.get("showModal"),
		modalData: state.card.get("modalData"),
		searchText: state.card.get("searchText"),
		inputText: state.card.get("changedText")
	};
}

export default connect(mapStateToProps)(Cards);
