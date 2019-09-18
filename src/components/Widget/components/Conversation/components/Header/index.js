import React from "react";
import Tab from "./Tab";
import "./style.scss";

const Header = props => {
  return (
    <div className="rcw-header">
      <div>
        <Tab label="Answers" value="ans" />
        <Tab label="Ask" value="ask" />
      </div>
    </div>
  );
};

export default Header;
