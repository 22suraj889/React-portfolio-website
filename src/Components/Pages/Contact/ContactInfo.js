import React, { useEffect } from "react";
import ContactData from "./ContactData";
import ContactInfoContent from "./ContactInfoContent";
import Style from "./ContactInfo.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const ContactInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={Style["contact_info"]} data-aos="fade-right">
      {ContactData.map((data) => (
        <ContactInfoContent key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ContactInfo;
