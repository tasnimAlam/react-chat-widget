import React from "react";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { setSearchText, getCards } from "@actions";
import { URL } from "../../../../../utils/constants";

const Search = ({ searchText, dispatch }) => (
	<div className="rcw-search-bar">
		<SearchBar
			value={searchText}
			onRequestSearch={value => {
				dispatch(setSearchText(value));
			}}
			onCancelSearch={() => {
				dispatch(setSearchText(""));
			}}
		/>
	</div>
);

export default connect()(Search);
