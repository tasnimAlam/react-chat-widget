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

const NotFound = () => (
	<div className="rcw-not-found">
		<h2>Not Found</h2>
	</div>
);

function filterCards(cards, searchText) {
	return cards.filter(
		card =>
			card.title.rendered.toLowerCase().includes(searchText.toLowerCase()) ||
			card.content.rendered.toLowerCase().includes(searchText.toLowerCase())
	);
}

function sortByTitle(cards, searchText) {
	if (cards.length === 0) return [];
	let updatedCards = [];

	cards.map(card => {
		if (card.title.rendered.toLowerCase().includes(searchText.toLowerCase())) {
			updatedCards.push(card);
		}
	});

	cards.map(card => {
		if (
			card.content.rendered.toLowerCase().includes(searchText.toLowerCase()) &&
			!updatedCards.includes(card)
		) {
			updatedCards.push(card);
		}
	});

	return updatedCards;
}

function setTextColor(string, searchText) {
	let query = new RegExp("(" + searchText + ")", "gim");
	return string.replace(query, "<span class='rcw-highlight'>$1</span>");
}

function addHighlight(cards, searchText) {
	let updatedCards = [...cards];
	updatedCards.map(card => {
		card.title.rendered = setTextColor(card.title.rendered, searchText);
		card.content.rendered = setTextColor(card.content.rendered, searchText);
		card.excerpt.rendered = setTextColor(card.excerpt.rendered, searchText);
	});

	return updatedCards;
}

function showPlaceholder() {
	return Array.from([1, 2, 3]).map((item, index) => <CardLoader key={index} />);
}

const Cards = props => {
	const { dispatch, allCards, searchText, modalData, inputText } = props;
	const [loading, setLoading] = useState(true);
	const [isOpen, toggleModal] = useState(false);

	const fetchData = url => {
		axios.get(url).then(res => dispatch(getCards(res.data)));
	};

	useEffect(() => {
		// Get cards from server
		let url = `${URL}&search=${searchText}`;
		fetchData(url);
	}, [searchText]);

	useEffect(() => {
		// Set loading effect
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [loading]);

	useEffect(() => {
		fetchData(URL);
		dispatch(setSearchText(""));
	}, [inputText]);

	let cards = [...allCards];

	// Filter, sort and highlight  on search
	if (searchText && cards.length) {
		cards = filterCards(cards, searchText);
		cards = addHighlight(cards, searchText);
		cards = sortByTitle(cards, searchText);
	}

	// Show placeholder while loading
	if (loading) {
		return showPlaceholder();
	}

	return (
		<Fragment>
			{cards.length > 0 ? (
				cards.map(card => (
					<Card
						key={card.id}
						{...card}
						toggleModal={toggleModal}
						setModalData={setModalData}
						dispatch={dispatch}
					/>
				))
			) : (
				<NotFound />
			)}
			<Modal data={modalData} isOpen={isOpen} toggleModal={toggleModal} />
			<Search setLoading={setLoading} searchText={searchText} />
		</Fragment>
	);
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
