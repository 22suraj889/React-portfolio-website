import React, { useContext, useState } from "react";
import HomeIcon from "./svg/HomeIcon";
import ContactIcon from "./svg/ContactIcon";
import PortfolioIcon from "./svg/PortfolioIcon";
import AboutIcon from "./svg/AboutIcon";
import Style from "./Navigation.module.css";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const { action, setAction } = useContext(AppContext);
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(1);
  const onClickHandler = (active, path) => {
    console.log(activeBtn, active);
    if (activeBtn !== active) {
      setAction({ ...action, burger: false });
    }
    navigate(path);
    setActiveBtn(active);
  };

  return (
    <nav
      className={`${Style["navbar"]} ${
        Style[action.burger ? "navbar_active" : ""]
      }`}
    >
      <ul>
        <li
          onClick={() => onClickHandler(1, "/")}
          className={Style[activeBtn === 1 ? "active" : ""]}
        >
          <HomeIcon />
          <span>Home</span>
        </li>
        <li
          onClick={() => onClickHandler(2, "/about")}
          className={Style[activeBtn === 2 ? "active" : ""]}
        >
          <AboutIcon />
          <span>About</span>
        </li>
        <li
          onClick={() => onClickHandler(3, "/portfolio")}
          className={Style[activeBtn === 3 ? "active" : ""]}
        >
          <PortfolioIcon />
          <span>Portfolio</span>
        </li>
        <li
          onClick={() => onClickHandler(4, "/contact")}
          className={Style[activeBtn === 4 ? "active" : ""]}
        >
          <ContactIcon />
          <span>Contact</span>
        </li>
      </ul>
      <footer className={Style["footer"]}>
        <p>Made By Suraj Poddar 😉</p>
      </footer>
    </nav>
  );
};

export default Navigation;
