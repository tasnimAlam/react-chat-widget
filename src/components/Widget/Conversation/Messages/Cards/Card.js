import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { toggleModal, setModalData } from "@actions";

const Card = props => {
	const {
		id,
		title,
		content,
		excerpt,
		toggleModal,
		setModalData,
		dispatch
	} = props;

	return (
		<div
			className="rcw-card-link"
			onClick={() => {
				toggleModal(true);
				dispatch(setModalData(content.rendered));
			}}
		>
			<div className="rcw-card-title-wrapper">
				<h3
					className="rcw-card-title"
					dangerouslySetInnerHTML={{
						__html: title.rendered
					}}
				></h3>
			</div>
			<div className="rcw-card-body-wrapper">
				<div
					className="rcw-card-body"
					dangerouslySetInnerHTML={{
						__html: excerpt.rendered
					}}
				></div>
			</div>
		</div>
	);
};

export default connect()(Card);
