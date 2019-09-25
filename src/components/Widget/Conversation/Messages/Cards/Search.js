import React from "react";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { setSearchText, onTextChange } from "@actions";

const Search = ({ searchText, dispatch }) => (
	<div className="rcw-search-bar">
		<SearchBar
			value={searchText}
			onChange={value => {
				dispatch(onTextChange(value));
			}}
			onRequestSearch={value => {
				dispatch(setSearchText(value));
			}}
		/>
	</div>
);

export default connect()(Search);
