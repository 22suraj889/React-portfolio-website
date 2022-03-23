import React, { useEffect, useState } from "react";
import PortfolioData from "./PortfolioData";
import PortfolioContent from "./PortfolioContent";
import Style from "./Portfolio.module.css";
import Heading from "../../UI/Heading";
import PortfolioButtons from "./PortfolioButtons";
import Aos from "aos";
import "aos/dist/aos.css";
const tools = ["All", ...new Set(PortfolioData.map((data) => data.tools))];
const Portfolio = () => {
  const [toolsData, setToolsData] = useState(PortfolioData);
  const changeToolsHandler = (toolsName) => {
    if (toolsName === "All") {
      setToolsData(PortfolioData);
    } else {
      const updatedToolsName = PortfolioData.filter(
        (item) => toolsName === item.tools
      );
      setToolsData(updatedToolsName);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={Style["portfolio_page"]}>
      <Heading>PORTFOLIO</Heading>
      <PortfolioButtons
        tools={tools}
        onChangeToolsHandler={changeToolsHandler}
      />
      <div className={Style["portfolio"]} data-aos="fade-right">
        {toolsData.map((pData) => (
          <PortfolioContent key={pData.id} pData={pData} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
