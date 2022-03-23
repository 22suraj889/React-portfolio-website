import React from "react";
import Style from "./ContactInfoContent.module.css";
const ContactInfoContent = ({ data }) => {
  const { img, contactBy, info } = data;
  return (
    <div className={Style["contact_content"]}>
      <div className={Style["contact_content__img"]}>
        <img src={img} alt={contactBy} />
      </div>
      <div className={Style["contact_content__by"]}>{contactBy}</div>
      <div className={Style["contact_content__info"]}>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactInfoContent;
