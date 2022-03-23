import React, { useState } from "react";
import Style from "./PortfolioButtons.module.css";
const PortfolioButtons = ({ tools, onChangeToolsHandler }) => {
  const [activePortfolio, setActivePortfolio] = useState(0);
  function onClickHandler(tool, index) {
    console.log(tool, index);
    setActivePortfolio(index);
    onChangeToolsHandler(tool);
    setActivePortfolio(index);
  }
  return (
    <div className={Style["project_navbar"]}>
      {tools.map((tool, index) => (
        <button
          key={index}
          style={{
            backgroundColor:
              activePortfolio === index ? "rgb(10, 133, 204)" : "",
          }}
          onClick={() => onClickHandler(tool, index)}
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default PortfolioButtons;
