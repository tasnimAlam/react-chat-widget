import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getCards } from "@actions";

const url = "https://jsonplaceholder.typicode.com/posts";

const Cards = props => {
  useEffect(() => {
    axios.get(url).then(res => props.dispatch(getCards(res.data)));
  }, []);

  return <div>Cards here</div>;
};

function mapStateToProps(state) {
  return {
    card: state.card.cards
  };
}

export default connect(mapStateToProps)(Cards);
