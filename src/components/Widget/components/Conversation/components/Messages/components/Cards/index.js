import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCards } from "@actions";

const url = "https://jsonplaceholder.typicode.com/posts";

const Cards = props => {
  useEffect(() => {
    props.dispatch(getCards(url));
  }, []);

  return <div>Cards here</div>;
};

function mapStateToProps(state) {
  return {
    card: state.card.cards
  };
}

export default connect(mapStateToProps)(Cards);
