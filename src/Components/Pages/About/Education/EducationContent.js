import React from "react";
import Style from "./EducationContent.module.css";
import HatIcon from "../../../svg/HatIcon";
const EducationContent = ({ edInfo }) => {
  return (
    <div className={Style["education_info"]}>
      <div className={Style["hat_icon"]}>
        <HatIcon />
      </div>
      <h2 className={Style["education_info__grade"]}>{edInfo.grade}</h2>
      <p>{edInfo.date}</p>
      <div className={Style["education_info__school"]}>
        <h3>{edInfo.school}</h3>
      </div>
      <div className={Style["education_info__place"]}>
        <p>{edInfo.place}</p>
      </div>
      <div className={Style["education_info__marks"]}>
        <p>{edInfo.marks}</p>
      </div>
    </div>
  );
};

export default EducationContent;
