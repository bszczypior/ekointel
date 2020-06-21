import React from "react";
import style from "./Best.module.css";
import { FaRegEdit, FaMoneyBillWaveAlt, FaTools } from "react-icons/fa";
import Fade from "react-reveal";

const Best = () => {
  return (
    <div className={style.bestWrapper}>
      <ul className={style.bestList}>
        <Fade>
          <li className={style.bestListEl}>
            <FaRegEdit></FaRegEdit>
            <h2>Kompleksowe doradztwo</h2>
            <p>
             Oferujemy profesjonalne doradztwo w zakrsie doboru tecnelogii oraz sprzętu. Do każdego klienta podchodzimy indywidulanie i dopasowujemy rozwiązania pasujące do Twoich potrzeb. 
            </p>
          </li>
        </Fade>
        <Fade>
          <li className={style.bestListEl}>
            <FaMoneyBillWaveAlt></FaMoneyBillWaveAlt>
            <h2>Konkurencyjne ceny</h2>
            <p>
             Oferujemy konkurencyjne ceny. Każdy projekt jest indywidualnie oceniany i konsultowany z klientem tak by wybrać możliwie najlesze rozwiązanie mieszczące sie w Twoim budrzecie.
            </p>
          </li>
        </Fade>
        <Fade>
          <li className={style.bestListEl}>
            <FaTools />
            <h2>Fachowy montaż instalacjii</h2>
            <p>
            Posiadamy niezbędne certyfikaty i uprawnienia (również UDT, F-gazy). Nieustannie szkolimy się i rozwijamy, w celu zapewnienia najwyższej jakości świadczonych usług.
            </p>
          </li>
        </Fade>
      </ul>
    </div>
  );
};
export default Best;
