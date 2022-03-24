import React, { useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import Style from "./Hamburger.module.css";
const Hamburger = () => {
  const { action, setAction } = useContext(AppContext);
  useEffect(() => {
    if (action.burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [action.burger]);
  
  return (
    <div
      className={`${Style["burger"]} ${Style[action.burger ? "toggle" : ""]} ${
        Style[action.darkMode ? "burger_dark" : ""]
      }`}
      onClick={() => setAction({ ...action, burger: !action.burger })}
    >
      <div className={Style["line1"]}></div>
      <div className={Style["line2"]}></div>
      <div className={Style["line3"]}></div>
    </div>
  );
};

export default Hamburger;
