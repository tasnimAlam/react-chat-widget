import * as actions from "./actionTypes";
import { useDispatch } from "react-redux";
import axios from "axios";

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
    cards: [1, 2, 3, 4, 5]
  };
}
