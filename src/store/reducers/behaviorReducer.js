import { Map } from "immutable";
import { createReducer } from "@utils/store";
import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
  showChat: false,
  selectedTab: "answers"
});

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update("showChat", showChat => !showChat),
  [actionTypes.SELECTED_TAB]: (state, { tabName }) =>
    state.update("selectedTab", selectedTab => tabName)
};

export default (state = initialState, action) =>
  createReducer(behaviorReducer, state, action);
