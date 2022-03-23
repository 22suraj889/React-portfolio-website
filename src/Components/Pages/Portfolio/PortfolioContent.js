import React, { useEffect } from "react";
import Style from "./PortfolioContent.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const PortfolioContent = ({ pData }) => {
  const { name, image, link, about } = pData;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={Style["portfolio_content"]} data-aos="fade-right">
      <div className={Style["portfolio_content__img"]}>
        <img src={image} alt={name} />
      </div>
      <div className={Style["portfolio_content__link"]}>
        <a href={link} rel="noreferrer" target="_blank">
          <img src="/Icons/github.png" alt="github" />
        </a>
      </div>
      <div className={Style["portfolio_content__details"]}>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default PortfolioContent;
