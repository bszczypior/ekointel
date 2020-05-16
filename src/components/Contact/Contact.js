import React from "react";
import style from "./Contact.module.css";
import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={style.contactWrapper}>
      <h1>Skontaktuj się z nami</h1>
      <div className={style.contactContent}>
        <div className={style.contactItem}>
          <FaPhoneAlt></FaPhoneAlt>
          <p>660306167</p>
        </div>

        <div className={style.contactItem}>
          <FaEnvelope></FaEnvelope>
          <p>waszemail@ekointel.pl</p>
        </div>

        <div className={style.contactItem}>
          <FaFacebook></FaFacebook>
          <p>@Ekointel</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
