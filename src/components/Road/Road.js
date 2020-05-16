import React from "react";
import style from "./Road.module.css";
import Fade from "react-reveal";

const Road = () => {
  return (
    <div className={style.roadWrapper}>
      <div className={style.roadHeader}>
        <Fade></Fade>
      </div>
      <div className={style.roadSecA}>
        <Fade>
          <div
            className={style.roadItemA}
            style={{ borderTop: "dotted 2px green" }}
          >
            <h2> Sontaktuj się z nami i umów dogodny termin spotkania</h2>
          </div>
        </Fade>
      </div>
      <div className={style.roadSecB}>
        <Fade>
          <div className={style.roadItemB}>
            <h2>
              Na spotkaniu ocenimy zakres prac i doradzimy w zakresie
              technologii
            </h2>
          </div>
        </Fade>
      </div>

      <div className={style.roadSecA}>
        <Fade>
          <div className={style.roadItemA}>
            <h2>Przygotujemy szczegółową wycenę</h2>
          </div>
        </Fade>
      </div>
      <div className={style.roadSecB}>
        <Fade>
          <div className={style.roadItemB}>
            <h2>Odpowiemy na wszystkie pytania</h2>
          </div>
        </Fade>
      </div>
      <div className={style.roadSecA} style={{ borderBottom: "none" }}>
        <Fade>
          <div className={style.roadItemA}>
            <h2>
              Ustalamy terminu montażu i wykonujemy pracę w ustalonym terminie.
            </h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Road;
