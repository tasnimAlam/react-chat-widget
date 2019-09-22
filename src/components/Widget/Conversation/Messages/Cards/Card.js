import React, { forwardRef } from "react";

const Card = props => (
	<div className="rcw-card-link">
		<div className="rcw-card-title-wrapper">
			<span className="rcw-card-title">{props.title}</span>
		</div>
		<div className="rcw-card-body-wrapper">
			<span className="rcw-card-body">{props.body}</span>
		</div>
	</div>
);

export default Card;
