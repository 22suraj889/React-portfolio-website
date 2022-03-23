import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import MoonIcon from "./svg/MoonIcon";
import SunIcon from "./svg/SunIcon";
import Style from "./DarkMode.module.css";
const DarkMode = () => {
  const { action, setAction } = useContext(AppContext);
  return (
    <div
      onClick={() => setAction({ ...action, darkMode: !action.darkMode })}
      className={`${Style["dark_mode"]} ${
        Style[action.darkMode ? "light_mode" : ""]
      }`}
    >
      {action.darkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default DarkMode;
