import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCards } from "@actions";

const Cards = props => {
  console.log(props);
  // useEffect(() => props.dispatch(getCards()), []);
  return <div>Cards here</div>;
};

export default connect()(Cards);
