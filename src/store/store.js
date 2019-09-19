import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise";
import behavior from "./reducers/behaviorReducer";
import messages from "./reducers/messagesReducer";
import card from "./reducers/cardReducer";

const reducer = combineReducers({ behavior, messages, card });

export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleWare),
    process.env.NODE_ENV !== "production"
      ? /* eslint-disable no-underscore-dangle */
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : ""
    /* eslint-enable */
  )
);
