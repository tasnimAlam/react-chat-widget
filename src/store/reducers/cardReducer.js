import { Map } from "immutable";
import { createReducer } from "@utils/store";
import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
  cards: []
});

const cardRaducer = {
  [actionTypes.GET_CARDS]: (state, { cards }) =>
    state.update("cards", data => cards)
};

export default (state = initialState, action) =>
  createReducer(cardRaducer, state, action);
