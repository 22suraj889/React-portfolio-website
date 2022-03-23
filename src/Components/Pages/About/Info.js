import React, { useContext } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import AppContext from "../../../Context/AppContext";
import Style from "./Info.module.css";
const Info = () => {
  const { action } = useContext(AppContext);
  const writerStyle = {
    color: "white",
    fontSize: "1.1rem",
    margin: "14px 16px 10px 36px",
    fontWeight: "600",
    whiteSpace: "pre-line",
  };
  return (
    <div className={Style["info"]}>
      <TypeWriterEffect
        textStyle={
          action.darkMode ? writerStyle : { ...writerStyle, color: "black" , margin: "14px 0px 10px 36px"}
        }
        startDelay={900}
        cursorColor="blue"
        multiText={[
          "Hi, my name is Suraj Poddar. I'm a Web Developer. \n I live in Prayagraj City, and I'm currently a second year student pursuing Bachelor's degree in Computer Science from Kalinga Institute of Industrial Technology.\n I love singing song and watching movies.",
        ]}
        nextTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
};

export default Info;
