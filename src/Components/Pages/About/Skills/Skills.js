import React, { useEffect } from "react";
import SkillsData from "./SkillsData";
import SkillInfo from "./SkillInfo";
import Style from "./Skills.module.css";
import Heading from "../../../UI/Heading";
import Aos from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Heading>Skills</Heading>
      <div className={Style["skills"]} data-aos="fade-right">
        {SkillsData.map((skill) => (
          <SkillInfo key={skill.id} imgSrc={skill.img} info={skill.knowledge} />
        ))}
      </div>
    </>
  );
};

export default Skills;
