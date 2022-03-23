import React, { useEffect } from "react";
import EducationContent from "./EducationContent";
import EducationData from "./EducationData";
import Style from "./Education.module.css";
import Heading from "../../../UI/Heading";
import Aos from "aos";
import "aos/dist/aos.css";
const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Heading>Education</Heading>
      <div className={Style["education"]} data-aos="fade-right">
        {EducationData.map((edInfo) => (
          <EducationContent key={edInfo.id} edInfo={edInfo} />
        ))}
      </div>
    </>
  );
};

export default Education;
