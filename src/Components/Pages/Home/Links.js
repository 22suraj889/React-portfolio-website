import React, { useState } from "react";
import Style from "./Links.module.css";

const Links = () => {
  const [activeIcon, setActiveIcon] = useState(false);
  const classes = `${Style["links"]} ${
    Style[activeIcon ? "links_active" : ""]
  } `;
  return (
    <div className={classes}>
      <a
        href="https://github.com/22suraj889"
        className={Style["links_github"]}
        rel="noreferrer"
        target="_blank"
      >
        <img src="/Icons/github.png" width="37px" height="37px" alt="github" />
      </a>
      <a
        href="https://twitter.com/SurajPo61554066"
        className={Style["links_twitter"]}
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="/Icons/twitter.png"
          width="37px"
          height="37px"
          alt="twitter"
        />
      </a>
      <button
        onClick={() => setActiveIcon(!activeIcon)}
        className={Style["links_btn"]}
      >
        +
      </button>
      <a
        href="https://leetcode.com/surajku2022/"
        className={Style["links_coding"]}
        rel="noreferrer"
        target="_blank"
      >
        <img src="/Icons/coding.png" width="37px" height="37px" alt="coding" />
      </a>
      <a
        href="https://www.linkedin.com/in/suraj-poddar-9039271ba/"
        className={Style["links_linkedin"]}
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="/Icons/linkedin.png"
          width="37px"
          height="37px"
          alt="linkedin"
        />
      </a>
    </div>
  );
};

export default Links;
