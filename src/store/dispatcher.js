import store from "./store";
import * as actions from "./actions";

export function toggleMsgLoader() {
  store.dispatch(actions.toggleMsgLoader());
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function isWidgetOpened() {
  return store.getState().behavior.get("showChat");
}
