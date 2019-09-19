import store from "./store";
import * as actions from "./actions";

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function isWidgetOpened() {
  return store.getState().behavior.get("showChat");
}
