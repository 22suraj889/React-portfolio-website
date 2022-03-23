import { useContext } from "react";
import AppContext from "../../../Context/AppContext";

const StyleElement = () => {
  const { action } = useContext(AppContext);
  if (action.darkMode) {
    document.documentElement.style.setProperty(
      "--font-blue-color",
      "rgb(10, 133, 204)"
    );
    document.documentElement.style.setProperty(
      "--background-dark-light-color",
      "rgb(37, 37, 37)"
    );
    document.documentElement.style.setProperty(
      "--content-dark-light-color",
      "white"
    );
    document.documentElement.style.setProperty(
      "--navbar-dark-light-color",
      "lightgray"
    );
    document.documentElement.style.setProperty(
      "--font-dark-light-color",
      "rgb(37, 37, 37)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--font-blue-color",
      "rgb(122, 43, 226)"
    );
    document.documentElement.style.setProperty(
      "--background-dark-light-color",
      "white"
    );
    document.documentElement.style.setProperty(
      "--content-dark-light-color",
      "black"
    );
    document.documentElement.style.setProperty(
      "--navbar-dark-light-color",
      "rgb(37, 37, 37)"
    );
    document.documentElement.style.setProperty(
      "--font-dark-light-color",
      "white"
    );
  }
  return null;
};

export default StyleElement;
