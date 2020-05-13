import React from "react";
import style from "./Content.module.css";
import Fade from "react-reveal";

const Content = () => {
  return (
    <div className={style.contentWrapper}>
      <Fade>
        <div className={style.contentText}>
          <h1>Kim jesteśmy ?</h1>
          <p>
            <span>Oferujemy</span> kompleksowe wykonywanie i serwisowanie
            instalacji eko i energooszczędnych oraz automatyki domowej w
            budynkach.
            <span> Stawiamy</span> na innowacyjne rozwiązania, które pozwalają
            oszczędzać energię, zmniejszać koszty ogrzewania i cieszyć się
            doskonałą temperaturą oraz jakością powietrza.
            <span> Staramy się</span> przy tym zapewnić atrakcyjne ceny
            wykonywanych przez nas usług z zastosowaniem produktów najwyższej
            jakości.
            <span> Proponujemy</span> wybór urządzeń od najlepszych producentów.
            <span> Zapewniamy</span> profesjonalny oraz szybki montaż.
            Uzupełnieniem naszych usług są sprawne przeglądy i rzetelny serwis
            urządzeń.{" "}
          </p>
        </div>

        {/* <div className={style.contentPhoto}></div> */}
      </Fade>
    </div>
  );
};
export default Content;
