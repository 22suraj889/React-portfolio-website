import React from "react";
import Style from "./SkillInfo.module.css";
const SkillInfo = ({ imgSrc, info }) => {
  return (
    <div className={Style["skill_info"]}>
      <div>
        <img src={imgSrc} alt="img" />
      </div>
      <div className={Style["skill_info__progress"]}>
        <div style={{ width: info }}></div>
      </div>
      <p>{info}</p>
    </div>
  );
};

export default SkillInfo;
