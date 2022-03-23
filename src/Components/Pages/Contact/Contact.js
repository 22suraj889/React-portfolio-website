import React from "react";
import Heading from "../../UI/Heading";
import ContactInfo from "./ContactInfo";
import Style from "./Contact.module.css";
import SendMail from "./SendMail";
const Contact = () => {
  return (
    <div className={Style["contact"]}>
      <Heading>CONTACT</Heading>
      <ContactInfo />
      <SendMail />
    </div>
  );
};

export default Contact;
