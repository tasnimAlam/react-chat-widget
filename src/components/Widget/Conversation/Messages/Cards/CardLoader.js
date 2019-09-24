import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => (
	<div className="rcw-card-link">
		<ContentLoader height={130} width={400} speed={2}>
			<rect x="0" y="0" rx="3" ry="3" width="350" height="10" />
			<rect x="0" y="20" rx="3" ry="3" width="320" height="10" />
			<rect x="0" y="40" rx="3" ry="3" width="270" height="10" />
			<rect x="0" y="60" rx="3" ry="3" width="350" height="10" />
			<rect x="0" y="80" rx="3" ry="3" width="300" height="10" />
			<rect x="0" y="100" rx="3" ry="3" width="180" height="10" />
		</ContentLoader>
	</div>
);

export default CardLoader;
