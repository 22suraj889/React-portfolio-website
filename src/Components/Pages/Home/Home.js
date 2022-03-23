import React, { useContext } from "react";
import Img from "../../Image/suraj.jpg";
import Style from "./Home.module.css";
import Links from "./Links";
import TypeWriterEffect from "react-typewriter-effect";
import AppContext from "../../../Context/AppContext";
const Home = () => {
  const { action } = useContext(AppContext);
  const writerStyle = {
    color: "white",
    fontSize: "1.2rem",
    margin: "0px 7px",
    borderBottom: "2px solid blue",
  };
  return (
    <div className={`${Style["home"]}`}>
      <div className={Style["home_description"]}>
        <div className={Style["home_description__brief"]}>
          <h1>Hi, I'm Suraj Poddar</h1>
          <h2>
            I'm a{" "}
            <TypeWriterEffect
              textStyle={
                action.darkMode
                  ? writerStyle
                  : { ...writerStyle, color: "black" }
              }
              startDelay={900}
              cursorColor="blue"
              multiText={["Programmer", "Web Developer"]}
              loop={true}
              nextTextDelay={1000}
            />
          </h2>
        </div>
        <div className={Style["home_description__connect"]}>
          <Links />
        </div>
      </div>
      <div className={Style["home_avatar"]}>
        <img src={Img} alt="avatar" />
      </div>
    </div>
  );
};

export default Home;
