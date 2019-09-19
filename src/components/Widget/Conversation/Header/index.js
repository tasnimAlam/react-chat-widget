import React from "react";
import Tab from "./Tab";

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
