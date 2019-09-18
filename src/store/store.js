import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import behavior from "./reducers/behaviorReducer";
import messages from "./reducers/messagesReducer";
import card from "./reducers/cardReducer";

const reducer = combineReducers(
	{ behavior, messages, card },
	applyMiddleware(thunk)
);

export default createStore(
	reducer,
	process.env.NODE_ENV !== "production"
		? /* eslint-disable no-underscore-dangle */
		  window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		: ""
	/* eslint-enable */
);
