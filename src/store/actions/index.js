import * as actions from "./actionTypes";

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function onTabSelect(tabName) {
  return {
    type: actions.SELECTED_TAB,
    tabName
  };
}

export function getCards(url) {
  return {
    type: actions.GET_CARDS,
    cards: ["hello"]
  };
}
