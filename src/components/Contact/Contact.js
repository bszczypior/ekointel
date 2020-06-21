import React from "react";
import style from "./Contact.module.css";
import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={style.contactWrapper}>
      <h1>Skontaktuj się z nami</h1>
      <h3>
        Jeśli masz pytania, wątpliwości bądź chcesz dowiedzieć się więcej na
        temat konkretnej instalacji - skontaktuj się z nami ! Chętnie odpowiemy
        na wszystkie Twoje pytania. Odwiedź nas również na Facebooku. Znajdziesz
        tam wiele informacji na temat naszej oferty i ciekawostki związane ze
        stosowanymi przez nas rozwiązaniami. Zapraszamy !!
      </h3>
      
      <div className={style.contactContent}>
          
        <div className={style.contactItem}>
          <FaPhoneAlt></FaPhoneAlt>
          <p> 694 700 006</p>
        </div>

        <div className={style.contactItem}>
          <FaEnvelope></FaEnvelope>
          <p>ekointel@vp.pl</p>
        </div>

        <div className={style.contactItem}>
          <a href="https://www.facebook.com/EkoIntel-pompy-ciep%C5%82a-rekuperacja-klimatyzacja-i-automatyka-domowa-106213881076077/">
          <FaFacebook></FaFacebook>
          <p>@Ekointel</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
