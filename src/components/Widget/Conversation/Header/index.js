import React from "react";
import Tab from "./Tab";
import { TABS } from "../../../../utils/constants";
import "./style.scss";

const Header = props => {
	return (
		<div className="rcw-header-wrapper">
			<div className="rcw-header">
				{TABS.map((item, index) => (
					<Tab key={index} label={item.label} value={item.value} />
				))}
			</div>
		</div>
	);
};

export default Header;
