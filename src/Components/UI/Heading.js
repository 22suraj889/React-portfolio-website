import React from "react";
import Style from "./Heading.module.css";
const Heading = (props) => {
  return <h2 className={Style["heading"]}>{props.children}</h2>;
};

export default Heading;
