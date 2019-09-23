import { Map } from "immutable";
import { createReducer } from "@utils/store";
import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
	cards: [],
	showModal: false
});

const cardRaducer = {
	[actionTypes.GET_CARDS]: (state, { cards }) =>
		state.update("cards", data => cards),
	[actionTypes.TOGGLE_MODAL]: state =>
		state.update("showModal", showModal => !showModal)
};

export default (state = initialState, action) =>
	createReducer(cardRaducer, state, action);
