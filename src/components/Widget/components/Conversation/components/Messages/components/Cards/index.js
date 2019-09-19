import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getCards } from "@actions";

const url = "https://jsonplaceholder.typicode.com/posts";

const Cards = props => {
  useEffect(() => {
    axios.get(url).then(res => props.dispatch(getCards(res.data)));
  }, []);

  return (
    <div>
      {props.cards.map(card => (
        <div key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cards: state.card.get("cards")
  };
}

export default connect(mapStateToProps)(Cards);
