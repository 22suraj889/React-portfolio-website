import React from "react";
import Info from "./Info";
import Img from "../../Image/suraj.jpg";
import ImgStyle from "../Home/Home.module.css";
import Style from "./About.module.css";
import Heading from "../../UI/Heading";
import Links from "../Home/Links";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";

const About = () => {
  return (
    <div className={Style["about"]}>
      <div className={Style["about_myself"]}>
        <Heading>ABOUT</Heading>
        <div className={Style["about_self"]}>
          <Info />
          <div className={ImgStyle["home_avatar"]}>
            <img src={Img} alt="avatar" />
          </div>
        </div>
        <Links />
      </div>
      <div>
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default About;
