import * as actions from "./actionTypes";

export function toggleChat() {
	return {
		type: actions.TOGGLE_CHAT
	};
}

export function onTabSelect(tabName) {
	return {
		type: actions.SELECTED_TAB,
		tabName
	};
}

export function getCards(cards) {
	return {
		type: actions.GET_CARDS,
		cards: cards,
		loading: false
	};
}

export function toggleModal(open) {
	return {
		type: actions.TOGGLE_MODAL,
		open: open
	};
}

export function setModalData(data) {
	return {
		type: actions.MODAL_DATA,
		data: data
	};
}

export function setSearchText(text) {
	return {
		type: actions.SEARCH_TEXT,
		text: text
	};
}

export function toggleLoading() {
	return {
		type: actions.TOGGLE_LOADING
	};
}
