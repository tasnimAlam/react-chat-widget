import React from "react";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { setSearchText } from "@actions";

const Search = ({ searchText, dispatch }) => (
	<div className="rcw-search-bar">
		<SearchBar
			value={searchText}
			onRequestSearch={value => {
				dispatch(setSearchText(value));
			}}
		/>
	</div>
);

export default connect()(Search);
