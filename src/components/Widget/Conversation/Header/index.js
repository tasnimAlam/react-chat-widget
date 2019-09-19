import React from "react";
import Tab from "./Tab";
import { TABS } from "../../../../utils/contants";
import "./style.scss";

const Header = props => {
	return (
		<div className="rcw-header">
			<div>
				{TABS.map(item => (
					<Tab label={item.label} value={item.value} />
				))}
			</div>
		</div>
	);
};

export default Header;
