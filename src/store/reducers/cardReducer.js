import { Map } from "immutable";
import { createReducer } from "@utils/store";
import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
	cards: [],
	showModal: false,
	loading: true,
	modalData: "",
	searchText: ""
});

const cardRaducer = {
	[actionTypes.GET_CARDS]: (state, { cards }) =>
		state.update("cards", data => cards),
	[actionTypes.TOGGLE_MODAL]: (state, { open }) =>
		state.update("showModal", showModal => open),
	[actionTypes.MODAL_DATA]: (state, { data }) =>
		state.update("modalData", modalData => data),
	[actionTypes.SEARCH_TEXT]: (state, { text }) =>
		state.update("searchText", searchText => text),
	[actionTypes.TOGGLE_LOADING]: (state, { load }) =>
		state.update("loading", loading => load),
	[actionTypes.CHANGE_TEXT]: (state, { text }) =>
		state.update("changedText", changedText => text)
};

export default (state = initialState, action) =>
	createReducer(cardRaducer, state, action);
