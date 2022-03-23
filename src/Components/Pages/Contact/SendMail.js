import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import Style from "./SendMail.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const SendMail = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_bpz9mfy", e.target, "-7UwAWTNGZaq7H5Kr")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={Style["mail"]} data-aos="fade-right">
      <form onSubmit={sendEmail}>
        <div className={Style["mail_content"]}>
          <div className={Style["mail_content__info"]}>
            <div className={Style["mail_content__info__name"]}>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className={Style["mail_content__info__email"]}>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className={Style["mail_content__info__subject"]}>
              <input type="text" placeholder="Subject" name="subject" />
            </div>
          </div>
          <div className={Style["mail_content__info__submit"]}>
            <div className={Style["mail_content__info__message"]}>
              <textarea rows="8" cols="30" placeholder="Your Message" />
            </div>
            <div className={Style["mail_content__info__btn"]}>
              <input type="submit" value="Send Message"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
