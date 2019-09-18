import { Map } from "immutable";

import { createReducer } from "@utils/store";

import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
  showChat: false,
  disabledInput: false,
  msgLoader: false
});

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update("showChat", showChat => !showChat)
};

export default (state = initialState, action) =>
  createReducer(behaviorReducer, state, action);
