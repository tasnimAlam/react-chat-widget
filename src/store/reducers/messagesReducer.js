import { List } from "immutable";
import { createReducer } from "@utils/store";

const initialState = List([]);

const messagesReducer = {};

export default (state = initialState, action) =>
  createReducer(messagesReducer, state, action);
