import React from "react";
import style from "./Road.module.css";
import Fade from "react-reveal";
import { FaPiggyBank, FaLeaf, FaThermometerHalf } from "react-icons/fa";

const Road = () => {
  return (
    <div className={style.roadWrapper}>
      <div className={style.roadTitle}>
        <Fade>
          <h1>Pozanj korzyści</h1>
        </Fade>
      </div>
      <Fade bottom>
        <div className={style.roadCard}>
          <h1>Oszczędzaj</h1>
          <FaPiggyBank />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </h3>
        </div>
      </Fade>

      <Fade bottom>
        <div className={style.roadCard}>
          <h1>Dbaj o środowisko</h1>
          <FaLeaf />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </h3>
        </div>
      </Fade>

      <Fade bottom>
        <div className={style.roadCard}>
          <h1>Kontroluj temperaturę</h1>
          <FaThermometerHalf />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </h3>
        </div>
      </Fade>
    </div>
  );
};
export default Road;
